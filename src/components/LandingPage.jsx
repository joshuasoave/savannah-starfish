import React, { useState, useEffect } from "react";
import starFishImage from "../assets/starFish.jpg";

const LandingPage = ({ handleLandingClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = starFishImage;
  }, []);

  useEffect(() => {
    if (imageLoaded) {
      setHasLoaded(true);
    }
  }, [imageLoaded]);

  return (
    <header
      className={`App-header ${imageLoaded ? "loaded" : ""}`}
      onClick={handleLandingClick}
    >
      {hasLoaded ? (
        <>
          <div className="App-logo-container">
            {imageLoaded && (
              <img src={starFishImage} className="App-logo" alt="starfish" />
            )}
            <p>Savannah Starfish</p>
          </div>
        </>
      ) : (
        <div className="loader" />
      )}
    </header>
  );
};

export default LandingPage;
