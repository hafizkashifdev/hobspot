import { BuyerIntentConfigurationAddIntentCriteriaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuyerIntentConfigurationAddIntentCriteriaPage = () => {
  return (
    <CommonPage
      pageTitle={`Configuration-Add Intent Criteria`}
      src={BuyerIntentConfigurationAddIntentCriteriaImage}
      backRoute="/buyer-intent"
    />
  );
};

export default BuyerIntentConfigurationAddIntentCriteriaPage;
