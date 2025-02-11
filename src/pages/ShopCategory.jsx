import React, { useContext } from "react";
import "./style/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down_icons from "../components/Assets/dropdown_icon.png";
import Item from "../components/Items/Item";
function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-Category-bannel" src={props.banner} alt="" />
      <div className="shopcategory-indexOf">
        <div>
          <p>
            <span>Shawing 1-12</span>out of 36 products
          </p>
        </div>
        <div className="shopCategory-sort">
          sort by <img src={drop_down_icons} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i} // Fixed key issue
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null; // Ensures .map always returns a value
        })}
      </div>

      <div className="shopcategory-loadmore">explore More</div>
    </div>
  );
}

export default ShopCategory;
