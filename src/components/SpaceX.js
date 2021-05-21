import React from 'react';
import Tile from './Tile';
import DATA_TILES from '../data/spacedata';

const SpaceX = ( {setEndpoint }) => {

   
    const changeEndpoint = newEndpoint => { setEndpoint(newEndpoint)}

    return (
        <div className="spacex">
            <ul className="tile__container">
                {DATA_TILES.map( ({img, name, valueI, valueII}) => 
                <li className="tile__single" key={name} onClick={()=> {changeEndpoint( [name, valueI, valueII]) }}> 
                    <Tile img={img} name={name}/>
                </li>)}
            </ul>
        </div>
    )
};

export default SpaceX;