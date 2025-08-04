import { CreatingASubscriptionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatingASubscriptionPage = () => {
  return (
    <CommonPage
      pageTitle={`Creating a Subscription`}
      src={CreatingASubscriptionImage}
      backRoute="/subscriptions-main"
    />
  );
};

export default CreatingASubscriptionPage;
