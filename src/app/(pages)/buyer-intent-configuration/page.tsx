import { BuyerIntentConfigurationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuyerIntentConfigurationPage = () => {
  return (
    <CommonPage
      pageTitle={`Buyer Intent Configuration`}
      src={BuyerIntentConfigurationImage}
      backRoute="/buyer-intent"
    />
  );
};

export default BuyerIntentConfigurationPage;
