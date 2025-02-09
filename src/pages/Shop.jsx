import React from "react";
import Herio from "../components/Herio/Herio";
import Popular from "../components/popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollection from "../components/NewCollections/NewCollection";
import NewsLetter from "../components/NewsLeter/NewsLetter";
import Footer from "../components/footer/Footer";

function Shop() {
  return (
    <div>
      <Herio />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Shop;
