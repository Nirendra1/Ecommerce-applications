import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Populars/Popular";
import Offer from "../Components/Offers/Offer";
import Newcollection from "../Components/Newcollections/Newcollection";
import Newsletter from "../Components/Newsletters/Newsletter";
import Footer from "../Components/Footers/Footer";

const Shop=()=>{

    return(
        <>
        <div>
            
            <Hero/>
            <Popular/>
            <Offer/>
            <Newcollection/>
            <Newsletter/>
            <Footer/>

        </div>
        </>
    )
}
export default Shop