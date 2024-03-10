import starFishImage from "../assets/starFish.jpg";

const LandingPage = ({ handleLandingClick }) => {
  return (
    <header className="App-header" onClick={handleLandingClick}>
      <div className="App-logo-container" alt="logo">
        <img src={starFishImage} className="App-logo" alt="starfish" />
      </div>
      <p>Savannah Starfish</p>
    </header>
  );
};

export default LandingPage;
