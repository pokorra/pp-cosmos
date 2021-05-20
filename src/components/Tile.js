import React from "react";

const Tile = ({img, name}) => {
  return (
    <>
      <img className="tile__background" src={img} alt={name}></img>
      <p className="tile__name"> {name}</p>
    </>
  );
};

export default Tile;
