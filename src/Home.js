import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default Home;
