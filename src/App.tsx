import { useState } from "react";
import HomeScreen from "./HomeScreen";

function App() {
  const [gameOptions, setGameOptions] = useState<null | {
    players: string[];
    categories: string[];
    allowHints: boolean;
  }>(null);

  if (!gameOptions) {
    return (
      <HomeScreen
        onStart={(options) => {
          console.log("Game starting with:", options);
          setGameOptions(options);
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