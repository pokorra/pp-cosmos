import SpaceX from "./components/SpaceX";
import Rocket from "./components/Rocket";
import "./scss/main.scss";

function App() {
  return (
    <div className="body">
      <div className="body__ornament body__ornament--right">
        <div className="body__ornament-inner"></div>
      </div>
      <div className="body__ornament body__ornament--left">
      <div className="body__ornament-inner"></div>
      </div>
      <div className="body__ornament body__ornament--top">
      <div className="body__ornament-inner"></div>
      </div>
      <SpaceX />
      <Rocket />
    </div>
  );
}

export default App;
