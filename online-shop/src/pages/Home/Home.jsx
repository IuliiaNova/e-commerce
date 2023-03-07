import React, { useContext } from "react";
import { Header, Banner, Footer } from "../../components";
import UserContext from "../../context/User/UserContext";
import "./Home.css";
import Section from "../../components/Section/Section";
import { Bestseller } from "../../components/SectionBest/SectionBest/Bestseller";

export const Home = () => {

    const { user } = useContext(UserContext); 
    console.log(user)


    return (
        <>
            <div className="back-image">
            <Header />
            <Banner />
            </div>
            <Section />
            <Bestseller />
            
            <Footer />
        </>
    )
}

export default Home;

