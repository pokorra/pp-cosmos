import React, {useState, useEffect} from 'react';
import BodyOrnaments from "./components/BodyOrnaments";
import SpaceX from "./components/SpaceX";
import Rocket from "./components/Rocket";
import Modal from "./components/Modal";
import "./scss/main.scss";

function App() {

  const [endpoint, setEndpoint] = useState("");
  const [spacexApi, setSpacexApi] = useState([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(()=> {
    if (endpoint !== "") {
      const API = "https://api.spacexdata.com/v4/";

      setLoading(true);

      fetch(`${API}${endpoint[0]}`)
        .then(res => res.json())
        .then(data => {setSpacexApi(data)})
        .catch(error => console.log(error))
      
        setLoading(false);
    }
  }, [endpoint])

  return (
    <div className="body">
      <BodyOrnaments />
      <SpaceX setEndpoint={setEndpoint} />
      <Rocket />
      <Modal setEndpoint={setEndpoint} endpoint={endpoint} spacexApi={spacexApi} setSpacexApi={setSpacexApi} />
    </div>
  );
}

export default App;
