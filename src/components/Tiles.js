import React from 'react';
import Tile from './Tile';
import DATA_TILES from '../data/spacedata';

const Tiles = ( {setCategory , category}) => {

   
    const changeCategory = newCategory => { if (!category) {setCategory(newCategory)} }

    return (       
            <ul className="tile__container">
                {DATA_TILES.map( ({img, name}) => 
                <li className="tile__single" key={name} onClick={()=> {changeCategory( name) }}> 
                    <Tile img={img} name={name}/>
                </li>)}
            </ul>
    )
};

export default Tiles;