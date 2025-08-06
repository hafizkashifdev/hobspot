import { BuyerIntentConfigurationAddTargetMarketImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuyerIntentConfigurationAddTargetMarketPage = () => {
  return (
    <CommonPage
      pageTitle={`Configuration-Add Target Market`}
      src={BuyerIntentConfigurationAddTargetMarketImage}
      backRoute="/buyer-intent"
    />
  );
};

export default BuyerIntentConfigurationAddTargetMarketPage;
