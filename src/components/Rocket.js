import React from 'react';

const Rocket = () => {

    return (
        <div className="rocket">
            <div className="rocket__moon moon">
                <div className="moon__spaceship"></div>
                <div className="moon__landing-gear"></div>
                <div className="moon__steam moon__steam-left"></div>
                <div className="moon__steam moon__steam-right"></div>
            </div>
            <button className="rocket__button"> Launch Rocket!</button>
        </div>
    )
}

export default Rocket;