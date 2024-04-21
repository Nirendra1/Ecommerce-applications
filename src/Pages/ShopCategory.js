import React, { useContext, useState } from "react";
import "./Css/ShopCategory.css";
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
import Footer from "../Components/Footers/Footer";

const ShopCategory = (props) => {

    const { all_product } = useContext(Shopcontext);

    // State to manage sorting
    const [sortBy, setSortBy] = useState("low"); // Default sorting by low price

    // Function to handle sorting change
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    // Function to filter and sort products based on the selected option
    const getSortedProducts = () => {

        const filteredProducts = all_product.filter(item => props.category === item.category);
        switch (sortBy) {


            case "low":
                return filteredProducts.sort((a, b) => a.new_price - b.new_price);
            case "medium":
                return filteredProducts.sort((a, b) => a.new_price - b.new_price);
            case "high":
                return filteredProducts.sort((a, b) => b.new_price - a.new_price);
            default:
                return filteredProducts;
        }
    };

    return (
        <>
            <div className="shop-category">
                <img className="shopcategory-banner" src={props.banner} alt="" />
                <div className="shopcategory-indexsort">
                    <p>
                        <span>Showing 1-12 </span> out of {all_product.length} Products
                    </p>
                    <div className="">
                        <select className="shopcategory-sort" onChange={handleSortChange} value={sortBy}
                        >

                            <option value="low">Price(Low)</option>
                            <option value="medium">Price(Medium)</option>
                            <option value="high">Price(High)</option>
                            <img className="sort-img" src={dropdown_icon} alt="" />

                        </select>
                        <img className="sort-img" src={dropdown_icon} alt="" />
                    </div>
                </div>
                <div className="shopcategory-products">
                    {getSortedProducts().map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))}
                </div>
                <div className="shopcategory-loadmore">
                    Explore More
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ShopCategory;