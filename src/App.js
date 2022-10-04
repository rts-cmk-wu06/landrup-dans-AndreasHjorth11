import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Welcome from "./Pages/Welcome";
import Activities from "./Pages/Activities";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/aktiviteter" element={<Activities />} />
      </Routes>
      <Test />
    </div>
  );
}

export default App;
