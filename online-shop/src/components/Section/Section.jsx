import React from "react";
import elle from "../image/press/ell.png";
import mcl from "../image/press/mcl.png";
import tatler from "../image/press/tatler.png";
import vogue from "../image/press/vogue.png";
import whth from "../image/press/whth.png";
import "./section.css";


const Section = () => {
    return (
        <div className="m-8">
            <h2 className="text-2xl w-full p-6 text-center font-semibold">SIMPLE CARE IN PRESS</h2>
            <div className="carusel-press m-4 p-4 flex flex-row justify-center justify-between align-middle">
                <img src={elle} alt="elle" className="h-28"/>
                <img src={mcl} alt="marie-cleare" className="h-32"/>
                <img src={tatler} alt="tatler" className="h-20 mt-4"/>
                <img src={vogue} alt="vogue" className="h-20 mt-4"/>
                <img src={whth} alt="women-health" className="h-32"/>
            </div>
        </div>

    )
}

export default Section;