import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { flower } from "../image/grafic.png"; 


export const Banner = () => {
    return (
        <section className=" h-screen">
                    <div className="presentation">
                        <img src={flower} />
                        <Link to="/shop" className="nav-item"><button className="button-banner">KNOW MORE</button></Link>
                        
                    </div>
        </section>

    )
}

export default Banner;