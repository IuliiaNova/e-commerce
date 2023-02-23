import React, { useContext } from "react";
import { Header, Banner, Footer } from "../../components";
import UserContext from "../../context/User/UserContext";

export const Home = () => {

    const { user } = useContext(UserContext); 
    console.log(user)


    return (
        <div>
            <Header />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home;

