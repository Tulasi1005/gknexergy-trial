import React from "react";
import "./App.css";
import bg from "./Background.gif";
import logo from "./logo.gif";

function App() {
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">

        {/* Left Logo */}
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* Right Content */}
        <div className="content glass">

          <h1 className="main-title fade-in">
            Your IT Innovation Journey
          </h1>

          <h2 className="subtitle fade-in delay1">
            Designed in Blueprint
          </h2>

          <p className="tagline fade-in delay2">
            TRAIN • BUILD • TRANSFORM
          </p>

          <button className="cta fade-in delay3">
            Discover the Vision
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;