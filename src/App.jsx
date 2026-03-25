import { useState, useEffect } from "react";
import { Rank } from "./components/Rank/Rank";
import posts from "./posts.json";
import { Header } from "./components/Header/Header";
import "./App.css";
import { Button } from "./components/Button/Button";
function App() {
  return (
    <>
      <div className="block">
        <div className="button">
          <Button></Button>
        </div>
        <div className="container">
          <Header></Header>
          {posts.map((player, index) => (
            <Rank
              key={index}
              Rank={player.rank}
              Name={player.name}
              Point={player.points}
              Team={player.team}
            ></Rank>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
