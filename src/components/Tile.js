import React from "react";

const Tile = ({ img, name }) => {
  return (
    <React.Fragment>
      <img className="tile__background" src={img} alt={name}></img>
      <p className="tile__name"> {name}</p>
    </React.Fragment>
  );
};

export default Tile;
