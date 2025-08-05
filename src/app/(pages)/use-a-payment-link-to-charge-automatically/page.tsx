import { UseAPaymentLinkToChargeAutomaticallyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UseAPaymentLinkToChargeAutomaticallyPage = () => {
  return (
    <CommonPage
      pageTitle={`Use a Payment Link to Charge Automatically`}
      src={UseAPaymentLinkToChargeAutomaticallyImage}
      backRoute="/subscriptions-main"
    />
  );
};

export default UseAPaymentLinkToChargeAutomaticallyPage;
