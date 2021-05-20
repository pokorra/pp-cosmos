import React, {useState} from 'react';
import Tile from './Tile';
import DATA_TILES from '../data/spacedata';

const SpaceX = () => {

    const [endpoint, setEndpoint] = useState("");
    const changeEndpoint = newEndpoint => { setEndpoint(newEndpoint)}

    return (
        <div className="spacex">
            <ul className="tile__container">
                {DATA_TILES.map( ({img, name}) => 
                <li className="tile__single" key={name} onClick={()=> {changeEndpoint(name)}}> 
                    <Tile img={img} name={name}/>
                </li>)}
            </ul>
        </div>
    )
};

export default SpaceX;