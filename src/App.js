import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Content from "./components/Content";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleLandingClick = () => {
    setShowLanding(false);
  };

  return (
    <div className="App">
      {showLanding ? (
        <LandingPage handleLandingClick={handleLandingClick} />
      ) : (
        <Content />
      )}
    </div>
  );
}

export default App;
