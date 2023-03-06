import React from "react";
import "./Banner.css";
import { flower } from "../image/grafic.png"; 


export const Banner = () => {
    return (
        <section className=" h-screen">
                    <div className="presentation">
                        <img src={flower} />
                        <button className="button-banner">KNOW MORE</button>
                    </div>
        </section>

    )
}

export default Banner;