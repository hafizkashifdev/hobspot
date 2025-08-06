import { BuyerIntentCompaniesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuyerIntentCompaniesPage = () => {
  return (
    <CommonPage
      pageTitle={`Buyer Intent Companies`}
      src={BuyerIntentCompaniesImage}
      backRoute="/buyer-intent"
    />
  );
};

export default BuyerIntentCompaniesPage;
