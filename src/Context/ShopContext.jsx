import React, { createContext } from "react";
import all_product from "../components/Assets/all_product";
export const ShopContext = createContext("null");

const ShopContectProvider = (props) => {
  const contectValue = { all_product };
  return (
    <ShopContext.Provider value={contectValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContectProvider;
