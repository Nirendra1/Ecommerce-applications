import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const Shopcontext = createContext(null);

const getDefaultcard = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const Shopcontextprovider = (props) => {
  const [cartItems, setCardItems] = useState(getDefaultcard());

  const Addtocard = (itemId, selectedSize) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: prev[itemId]?.quantity + 1 || 1,
        size: selectedSize
      }
    }));
  };

  const Removefromcard = (itemId) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: Math.max(prev[itemId]?.quantity - 1, 0),
        size: prev[itemId]?.size // Retain size when removing item
      }
    }));
  };

  
  const getTotalcardAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item]?.quantity > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item].quantity;
      }
    }
    return totalAmount;
  };



  const getTotalcarditems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item]?.quantity > 0) {
        totalItem += cartItems[item].quantity;
      }
    }
    return totalItem;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    all_product,
    cartItems,
    Addtocard,
    Removefromcard,
    getTotalcardAmount,
    getTotalcarditems
  };

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default Shopcontextprovider;














// import React, { createContext, useState } from "react";

// import all_product from "../Components/Assets/all_product";

// import Carditem from "../Components/Carditems/Carditem";

// export const Shopcontext = createContext(null);

// const getDefaultcard = () => {
//   let cart = {};
//   for (let index = 0; index < all_product.length + 1; index++) {
//     cart[index] = 0;
//   }

//   return cart;

// };

// const Shopcontextprovider = (props) => {
    
//   const [cartItems, setcardItems] = useState(getDefaultcard());

//   const Addtocard = (itemId,selectedSize) => {
    
//     setcardItems((prev) => ({ ...prev, [itemId]: { quantity: prev[itemId]?.quantity + 1 || 1, size: selectedSize } }));

//     // setcardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

//     console.log(cartItems);
    

//   };

//   const Removefromcard = (itemId) => {

//     setcardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  
//   };

//   // eye function ko total card show krne ke liye create kia hain

//   const getTotalcardamount = () => {

//     let totalAmount = 0;

//     for (const item in cartItems) {

//       if (cartItems[item] > 0) {

//         let itemInfo = all_product.find((product) => product.id === Number(item))

//         totalAmount += itemInfo.new_price * cartItems[item]
//       }

//       return totalAmount;

//     }

//   }



//   // eye function total carditems ko define krta hain

//   const getTotalcarditems = () => {

//     let totalItem = 0;
//     for (const item in cartItems) {

//       if (cartItems[item] > 0) {

//         totalItem += cartItems[item]

//       }
//     }
//     return totalItem;
//   }


//   React.useEffect(() => {

//     console.log(cartItems);

//   }, [cartItems]);


//   // eye data ko as a props kam kr rha hai 
//   // const contextValue = { all_product, cartItems, Addtocard, Removefromcard, getTotalcardamount, getTotalcarditems };
//   const contextValue = {all_product, cartItems, Addtocard, Removefromcard, getTotalcardamount, getTotalcarditems };


//   // console.log("mdwjdfenfnfjnfjf", contextValue)

//   return (
//     <>
//       <div>
//         <Shopcontext.Provider value={contextValue}>
          
//           {props.children}
        
//         </Shopcontext.Provider>
//       </div>
//     </>
//   );
// };

// export default Shopcontextprovider;
