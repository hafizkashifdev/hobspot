import { BuyerIntentOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuyerIntentOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Buyer Intent  Overview`}
      src={BuyerIntentOverviewImage}
      backRoute="/buyer-intent"
    />
  );
};

export default BuyerIntentOverviewPage;
