import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { flower } from "../image/grafic.png"; 


export const Banner = () => {
    return (
        <section className="">
                    <div className="presentation flex gap-8">
                        <img src={flower} />
                        <Link to="/shop" className="nav-item mt-8"><button className="button-banner mt-8">KNOW MORE</button></Link>
                        
                    </div>
        </section>

    )
}

export default Banner;