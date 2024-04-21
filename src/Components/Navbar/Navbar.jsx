import React, { useContext, useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import card_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { Shopcontext } from "../../Context/Shopcontext";
const Navbar = () => {

    const [menu, setMenu] = useState("shop")

    const{getTotalcarditems}=useContext(Shopcontext )

    return (
        <>

            <div className="navbar">
                <div className="nav-logo">
                    
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                
                </div>
                <ul className="nav-menu">

                    <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to="/">Shop</Link>{menu == "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: "none" }} to="/mens">Men</Link>{menu == "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: "none" }} to="/womens">Women</Link>{menu == "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to="/kids">Kids</Link>{menu == "kids" ? <hr /> : <></>}</li>
                
                </ul>

                <div className="nav-login-card">

                    <Link to="/login"><button>Login</button></Link>

                    <Link to="/cart"><img src={card_icon} alt="" /></Link>
                    
                    <div className="nav-cart-count">{getTotalcarditems()}</div>

                </div>

        
            </div>


        </>
    )
}

export default Navbar;