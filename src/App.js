import React, {useState, useEffect} from 'react';
import BodyOrnaments from "./components/BodyOrnaments";
import SpaceX from "./components/SpaceX";
import Rocket from "./components/Rocket";
import Modal from "./components/Modal";
import "./scss/main.scss";
import { getData } from './api-service'

function App() {

  const [category, setCategory] = useState("");
  const [data, setData] = useState([])
  // const [spacexApi, setSpacexApi] = useState([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(()=> {
    if (category) {
      setLoading(true);

    
      
      getData(category).then(
        res => {
          setData(res);
          setLoading(false);
        }
      )
      

    }
  }, [category])

  return (
    <div className="body">
      <BodyOrnaments />
      <SpaceX setCategory={setCategory} />
      <Rocket />
      <Modal setCategory={setCategory} category={category} data={data} setData={setData} />
    </div>
  );
}

export default App;
