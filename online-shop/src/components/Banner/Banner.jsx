import React from "react";
import "./Banner.css";
import girl from "../image/girl.jpg"

export const Banner = () => {
    return (
        <section className="section-banner">
            <div className="text-content">
            <p className="p-banner">“Love yourself first, and everything else falls in line...”</p>
            <h3 className="h3-banner">Natural cosmetics for skin care </h3>
            <p>SKIN CARE PRODUCTS, 98% CONSISTING OG NATURAL INGREDIENTS</p>
            <button className="button-banner">KNOW MORE</button>
            </div>
            <div>
                <img src={girl}/>
            </div>
        </section>

    )
}

export default Banner;