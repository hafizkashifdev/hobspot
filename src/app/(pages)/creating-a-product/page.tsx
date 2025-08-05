import { CreatingAProductImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatingAProductPage = () => {
  return (
    <CommonPage
      pageTitle={` Creating a Product`}
      src={CreatingAProductImage}
      backRoute="/products-main"
    />
  );
};

export default CreatingAProductPage;
