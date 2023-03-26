import React from "react";
import "./list.css";
import { useContext } from "react";
import { CreatContext } from "../../context/cart/cartContex";
function List() {
    const {increment} = useContext(CreatContext);
  return (
    <div>
      <div>
        {/* <div className="Btn">
          <button onClick={increment} className="addToCart">Add To Cart</button>
        </div> */}


<div className="wrapper">
  <a onClick={increment} href="#">Add TO Cart</a>
</div>




        
      </div>
    </div>
  );
}

export default List;
