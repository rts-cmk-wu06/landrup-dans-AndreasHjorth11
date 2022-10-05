import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Welcome from "./Pages/Welcome";
import Activities from "./Pages/Activities";
import Details from "./Pages/Details";
import Details2 from "./Pages/Details2";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/aktiviteter" element={<Activities />} />
        <Route exact path="/aktivitet/1/detaljer" element={<Details />} />
        <Route exact path="/aktivitet/2/detaljer" element={<Details2 />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Test />
    </div>
  );
}

export default App;
