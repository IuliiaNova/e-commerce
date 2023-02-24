import React, { useContext } from "react";
import { Header, Banner, Footer } from "../../components";
import UserContext from "../../context/User/UserContext";
import "./Home.css";

export const Home = () => {

    const { user } = useContext(UserContext); 
    console.log(user)


    return (
        <>
            <div className="back-image">
            <Header />
            <Banner />
            </div>
            
            <Footer />
        </>
    )
}

export default Home;

