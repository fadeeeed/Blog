import "./App.css";
import MenuBar from "./components/menu-bar/menu-bar";
import LeetCode from "./pages/leet-code/leet-code";
import Terraform from "./pages/terraform/terraform";
import Home from "./pages/home/home";
import Create from "./pages/create/create";
import React from "./pages/react/react";
import Aws from "./pages/aws/aws";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programming" element={<LeetCode />} />
        <Route path="terraform" element={<Terraform />} />
        <Route path="aws" element={<Aws />} />
        <Route path="react" element={<React />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
