import React from "react"
import { Header, Footer } from "../../components";
import WishList from "../../components/Whishes/WishList";
import BannerTwo from "../../components/Banner/BannerTwo";


const Wishlist = () => {
    return (
        <div>
            <Header />
            <BannerTwo />
            <WishList />
            <Footer />  
        </div>
    )
}

export default Wishlist;



