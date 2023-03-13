import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

export const Banner = () => {
    return (
        <section className="w-auto">
                    <div className="presentation flex gap-8">
                        <Link to="/shop" className="nav-item mt-8"><button className="button-banner mt-8">KNOW MORE</button></Link>
                    </div>
        </section>
    )
}

export default Banner;