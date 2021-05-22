import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Rocket = () => {
    const [rocketState, setRocketState] = useState(0);
    const newRocketState = () => {setRocketState(prev => prev+1)}

    const spaceshipRef = useRef(null);
    const leftCloudRef = useRef(null);
    const rightCloudRef = useRef(null);
    const gearRef = useRef(null);

    useEffect( () => {
        if (rocketState > 0) {
            const tl = gsap.timeline();
            tl.fromTo(spaceshipRef.current, { y: "0%"}, { duration: 1, y: "-=500%", autoAlpha: 0})
                .fromTo(spaceshipRef.current, { y: "-=200"}, {duration: .1, y: "=0%"})
                .fromTo(spaceshipRef.current, {y: "0%"}, {duration: .1, y: "500%"})
                .fromTo(gearRef.current, {autoAlpha: 1}, {duration: .5, autoAlpha: 0}, "-=1")
                .fromTo(rightCloudRef.current, {autoAlpha: 1, scale: 1}, {duration: .5, scale: 2, autoAlpha: 0 })
                .fromTo(leftCloudRef.current, {autoAlpha: 1, scale: 1}, {duration: .3, scale: 2, autoAlpha: 0}, "-=.5")
                .fromTo(spaceshipRef.current, {autoAlpha: 1, y: "500%"}, {duration: 1, ease: "back.out(2.1)", y: "0%"}, "=1")
                .to(gearRef.current, {duration: .1, autoAlpha: 1})
                .to(rightCloudRef.current, {duration: .2, autoAlpha: 1, scale: 1})
                .to(leftCloudRef.current, {duration: .2, autoAlpha: 1, scale: 1}, "-=.2")
        }
    }, [rocketState])

    return (
        <div className="rocket">
            <div className="rocket__moon moon">
                <div ref={spaceshipRef} className="moon__spaceship"></div>
                <div ref={gearRef} className="moon__landing-gear"></div>
                <div ref={leftCloudRef} className="moon__steam moon__steam-left"></div>
                <div ref={rightCloudRef} className="moon__steam moon__steam-right"></div>
            </div>
            <button className="rocket__button" onClick={newRocketState}> Launch Rocket!</button>
        </div>
    )
}

export default Rocket;