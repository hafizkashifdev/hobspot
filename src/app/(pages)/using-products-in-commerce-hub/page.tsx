import { UsingProductsInCommerceHubImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UsingProductsInCommerceHubPage = () => {
  return (
    <CommonPage
      pageTitle={`Using Products in Commerce Hub`}
      src={UsingProductsInCommerceHubImage}
      backRoute="/products-main"
    />
  );
};

export default UsingProductsInCommerceHubPage;
