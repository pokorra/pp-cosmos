import React, {useState, useEffect} from 'react';
import BodyOrnaments from "./components/BodyOrnaments";
import SpaceX from "./components/SpaceX";
import Rocket from "./components/Rocket";
import Modal from "./components/Modal";
import { getData } from './api-service'
import "./scss/main.scss";

function App() {

  const [category, setCategory] = useState("");
  const [data, setData] = useState([])
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
      <section className="body__inner-elements">
        <SpaceX setCategory={setCategory} />
        <Rocket />
      </section>
      <Modal setCategory={setCategory} category={category} data={data} setData={setData} loading={loading} />
    </div>
  );
}

export default App;
