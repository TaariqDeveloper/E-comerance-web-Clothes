import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import { useParams } from "next/navigation";
import Breadcumps from "../components/Breadcrums/Breadcumps";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcumps product={product} />
    </div>
  );
}

export default Product;
