import React, { useContext } from "react";
import { Header, Banner, Footer } from "../../components";
import UserContext from "../../context/User/UserContext";

export const Home = () => {

    const { user } = useContext(UserContext); 
    console.log(user)


    return (
        <div>
            <div className="back-image">
            <Header />
            <Banner />
            
            </div>
            <Footer />
        </div>
    )
}

export default Home;

