import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header1/Header.jsx";
import Banner from "./Components/Banner1/Banner.jsx";
import Footer from "./Components/Footer1/Footer1.jsx";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
