import React from "react";
import elle from "../image/press/ell.png";
import mcl from "../image/press/mcl.png";
import nhth from "../image/press/nhth.png";
import tatler from "../image/press/tatler.png";
import vogue from "../image/press/vogue.png";
import whth from "../image/press/whth.png";


const Section = () => {
    return (
        <div className="section-press">
            <h2>SIMPLE CARE IN PRESS</h2>
            <div className="carusel-press m-4 p-4 flex flex-row h-28 w-fuul justify-center justify-between">
                <img src={elle} alt="elle" />
                <img src={mcl} alt="marie-cleare" />
                <img src={nhth} alt="nature-health" />
                <img src={tatler} alt="tatler" />
                <img src={vogue} alt="vogue" />
                <img src={whth} alt="women-health" />

            </div>

        </div>

    )
}

export default Section;