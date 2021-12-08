/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
// import useCartContext from '../context/cartContext'

function CartWidget() {
  // const { quantity } = useCartContext();
  return (
    <>
      <Link to="/Cart">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </Link>
      {/* <span >{quantity}</span> */}

    </>
  );
}

export default CartWidget;
