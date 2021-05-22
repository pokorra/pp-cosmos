import React from "react";
import Tile from "./Tile";
import dataToDisplay from "../data/dataToDisplay";

const Tiles = ({ setCategory, category }) => {
  const changeCategory = (newCategory) => {
    if (!category) {
      setCategory(newCategory);
    }
  };

  return (
    <ul className="tile__container">
      {dataToDisplay.map(({ img, categoryName }) => (
        <li
          className="tile__single"
          key={categoryName}
          onClick={() => {
            changeCategory(categoryName);
          }}
        >
          <Tile img={img} name={categoryName} />
        </li>
      ))}
    </ul>
  );
};

export default Tiles;
