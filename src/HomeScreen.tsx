import { useState } from "react";

interface Props {
  onStart: (options: {
    players: string[];
    categories: string[];
    allowHints: boolean;
  }) => void;
}

export default function HomeScreen({ onStart }: Props) {
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [allowHints, setAllowHints] = useState(false);

  const allCategories = ["Animals", "Objects", "Food", "Games", "Professions"];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const addPlayer = () => {
    if (newPlayerName.trim() === "") return;
    setPlayers([...players, newPlayerName.trim()]);
    setNewPlayerName("");
  };

  const removePlayer = (name: string) => {
    setPlayers(players.filter(p => p !== name));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Impostor Game</h1>

      {/* Players Section */}
      <h2>Players</h2>
      <ul>
        {players.map(p => (
          <li key={p} style={{ marginBottom: "4px" }}>
            {p}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removePlayer(p)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>

      <input
        value={newPlayerName}
        onChange={e => setNewPlayerName(e.target.value)}
        placeholder="New player"
      />
      <button onClick={addPlayer}>Add player</button>

      <hr style={{ margin: "20px 0" }} />

      {/* Categories Section */}
      <h2>Categories</h2>
      {allCategories.map(cat => (
        <div key={cat}>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        </div>
      ))}

      <hr style={{ margin: "20px 0" }} />

      {/* Hints */}
      <label>
        <input
          type="checkbox"
          checked={allowHints}
          onChange={() => setAllowHints(!allowHints)}
        />
        Allow impostor hints
      </label>

      <hr style={{ margin: "20px 0" }} />

      {/* Start Game Button */}
      <button
        onClick={() =>
          onStart({ players, categories: selectedCategories, allowHints })
        }
        disabled={players.length < 3 || selectedCategories.length === 0}
      >
        Start Game
      </button>
    </div>
  );
}
