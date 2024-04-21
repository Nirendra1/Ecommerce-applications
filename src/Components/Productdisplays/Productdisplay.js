import React, { useContext } from "react";
import { useState,useEffect } from "react";
import "./Productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Shopcontext } from "../../Context/Shopcontext";

const Productdisplay = (props) => {
    const { product } = props;
    const { Addtocard } = useContext(Shopcontext);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        // console.log(selectedSize,"selected size here for chacking");
        
    }, [selectedSize]); // This useEffect hook will trigger whenever selectedSize changes

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }
        Addtocard(product.id, selectedSize);
    }

    return (
        <>
            <div className="productdisplay">

                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">

                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />

                    </div>
                    <div className="productdisplay-img">

                        <img className="productdisplay-main-img" src={product.image} alt="" />

                    </div>
                </div>

                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} al="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>

                    </div>

                    <div className="productdisplay-right-prices">

                        <div className="productdisplay-right-prices-old">{product.old_price}</div>

                        <div className="productdisplay-right-prices-new">{product.new_price}</div>

                    </div>

                    <div className="productdisplay-right-description">
                        A lightweight, usually knitted, pullover shirt,close-fitting and

                    </div>

                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">

                            <div onClick={() => handleSizeSelect('S')} className={selectedSize === 'S' ? 'selected' : ''}>S</div>
                            <div onClick={() => handleSizeSelect('M')} className={selectedSize === 'M' ? 'selected' : ''}>M</div>
                            <div onClick={() => handleSizeSelect('L')} className={selectedSize === 'L' ? 'selected' : ''}>L</div>
                            <div onClick={() => handleSizeSelect('xL')} className={selectedSize === 'xL' ? 'selected' : ''}>xL</div>


                        </div>
                    </div>


                    <button onClick={()=>{handleAddToCart(product)}}>Add To Cart</button>
                    
                    <p className="productdisplay-right-category"><span>Category</span>Women,T-shirt,Crop-Top</p>
                    <p className="productdisplay-right-category"><span>Tags</span>Moderns,Latest</p>
                </div>
            

            {/* <Carditem selectedSize={selectedSize} /> */}
</div>
        </>
    )
}

export default Productdisplay;