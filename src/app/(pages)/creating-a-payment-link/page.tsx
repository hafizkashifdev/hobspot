import { CreatingAPaymentLinkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatingAPaymentLinkPage = () => {
  return (
    <CommonPage
      pageTitle={`Creating a Payment Link`}
      src={CreatingAPaymentLinkImage}
      backRoute="/payment-links-main"
    />
  );
};

export default CreatingAPaymentLinkPage;
