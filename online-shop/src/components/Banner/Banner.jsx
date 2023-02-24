import React from "react";
import "./Banner.css";

export const Banner = () => {
    return (
        <section className="section-banner h-screen bg-gray-50">
            <div className="text-content container mx-auto text-center text-white ">
                <div className="section-div-text-big flex items-center p-4">
                    <h3 className="h3-banner text-5xl text-gray-900 font-medium mb-6">THE BEST OF NATURE BEAUTY</h3>
                </div>
                <div className="section-decor-big flex flex-col justify-items-end">
                    <div className="section-decor-small">
                        <button className="button-banner ">KNOW MORE</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner;