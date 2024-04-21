import React, { useContext } from "react";
import "./Carditem.css";
import { Shopcontext } from "../../Context/Shopcontext";
import remove_icon from "../Assets/cart_cross_icon.png";

const Carditem = () => {
  const { all_product, cartItems, Removefromcard, getTotalcardAmount } = useContext(Shopcontext);

  return (
    <div className="carditems">
      <div className="carditems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id]?.quantity > 0) {
          return (
            <div key={item.id} className="carditems-format carditems-format-main">
              <img src={item.image} alt="" className="carditems-product-icon" />
              <div>{item.name}</div>
              <p>{item.old_price}</p>
              <p>{cartItems[item.id]?.size}</p>
              <button className="carditems-quantity">{cartItems[item.id]?.quantity}</button>
              <p>{item.new_price * cartItems[item.id]?.quantity}</p>
              <img
                className="carditems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  Removefromcard(item.id);
                  // <p>sumissues</p>
                }}
                alt=""
              />
            </div>
          );
        }
        return null;
      })},



      <div className="cartitems-down">
        <div className="cartitem-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p className="zero">Rs{getTotalcardAmount()}</p>
            </div>
            <hr />
            <div className="">
              <p className="shipping">Shipping fee</p>
              <p className="free">free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total Amount</h3>
              <p className="zero1">Rs{getTotalcardAmount()}</p>
            </div>
          </div>
          <button className="button">PROCEES TO CHECKOUT</button>
        </div>

        <div className="codes">
          
          <p >If you have a promo code</p>

          {/* <div className="cartitem"> */}
            <input className="text" type="text" placeholder="Enter here" />
            < button className="submit">Sumit</button>
          {/* </div> */}

        </div>

      </div>

     </div>
  );
};

export default Carditem;

