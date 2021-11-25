// import React, { useContext, useState } from "react";
import React, {  useState } from "react";

import cartContext from "./cartContext";

const CartState = ({ children }) => {
  // const [list, setList] = useState([]);
  const [list] = useState([]);


  return (
    <cartContext.Provider
      value={{
        list,
        quantity: list.length
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartState;
