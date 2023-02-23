import React from "react";
import "./Banner.css";
import girl from "../image/girl.jpg"

export const Banner = () => {
    return (
        <section className="section-banner h-screen bg-gray-50 flex items-center">
            <div className="text-content container mx-auto text-center text-white">
            <p className="p-banner text-gray-900">“Love yourself first, and everything else falls in line...”</p>
            <h3 className="h3-banner text-5xl text-gray-900 font-medium mb-6">Natural cosmetics for skin care </h3>
            <p className="text-xl mb-12 text-gray-900">SKIN CARE PRODUCTS, 98% CONSISTING OG NATURAL INGREDIENTS</p>
            <button className="button-banner  py-4 px-12 rounded-full">KNOW MORE</button>
            </div>
            <div>
                <img src={girl}/>
            </div>
        </section>

    )
}

export default Banner;