import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Main_Content } from "./components/Main_Content/Main_Content";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Main_Content></Main_Content>
      </div>
    </>
  );
}

export default App;
