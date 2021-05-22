import React, {useState, useEffect} from 'react';
import Logo from "./components/Logo";
import BodyOrnaments from "./components/BodyOrnaments";
import BodyTwinkles from "./components/BodyTwinkles";
import Tiles from "./components/Tiles";
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
      <BodyTwinkles />
      <Logo/>
      <section className="body__inner-elements">
        <Tiles setCategory={setCategory} category={category}/>
        <Rocket />
      </section>
      <Modal setCategory={setCategory} category={category} data={data} setData={setData} loading={loading} />
    </div>
  );
}

export default App;
