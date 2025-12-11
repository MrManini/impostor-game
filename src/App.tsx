import { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import RoleReveal from "./components/RoleReveal";

function App() {
  const [gameOptions, setGameOptions] = useState<null | {
    players: string[];
    categories: string[];
    allowHints: boolean;
    impostors: string[]; 
    starter_player: string;
  }>(null);

  if (!gameOptions) {
    return (
      <HomeScreen
        onStart={(options) => {
          const players = options.players;
          const impostorCount = options.impostorCount;

          // Impostores unicos
          const impostors: string[] = [];
          const pool = [...players];

          for (let i = 0; i < impostorCount; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            impostors.push(pool[idx]);
            pool.splice(idx, 1); // evitar repetidos
          }
          
          // Starter Player
          const randomPlayer = Math.floor(Math.random()* options.players.length);
          const selectedPlayer = options.players[randomPlayer]
          
          console.log("Game starting with:", options, "Impostors:", impostors, "Starter Player:", selectedPlayer);
          setGameOptions({
            ...options,
            impostors,
            starter_player: selectedPlayer,
          });
        }}
      />
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Game Started!</h1>
      <pre>{JSON.stringify(gameOptions, null, 2)}</pre>
    </div>
  );
}

export default App;