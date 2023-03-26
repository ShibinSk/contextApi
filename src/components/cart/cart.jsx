import React from "react";
import { useContext } from "react";
import { CreatContext } from "../../context/cart/cartContex";

import "./cart.css";
function Cart() {
const {counter}  = useContext(CreatContext);

  return (
    <div>
      <div className="body">
        <div>{counter}</div>
        <img
          className="cart"
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cart;
