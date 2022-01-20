import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Intro from "./pages/Intro/Intro";
import Letter from "./pages/Letter/Letter";
import Cake from "./pages/Cake/Cake";
import Outro from "./pages/Outro/Outro";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/outro" element={<Outro />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
