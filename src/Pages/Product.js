import React, { useContext } from "react";
import { Shopcontext } from "../Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import Productdisplay from "../Components/Productdisplays/Productdisplay";
import Descriptionbox from "../Components/Descriptionboxs/Descriptionbox";
import Relatedproduct from "../Components/Relatedproducts/Relatedproduct";


const Product = () => {

    const { all_product } = useContext(Shopcontext)

    const { productId } = useParams();

    const product = all_product.find((e) => e.id === Number(productId))
    

    return (

        <>
            <div>

                <Breadcrum product={product} />
            
                <Productdisplay product={product} />
                
                <Descriptionbox />

                <Relatedproduct />

            </div>

        </>
    )
}

export default Product;

