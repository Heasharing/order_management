
import "./SplashScreen.css"; // Optional for styling

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="logo-container">
        <img src="./assets/react.svg" alt="Logo" className="logo" />
        <h1>Welcome to MyApp</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
