import { Chapter20AuthenticationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter20AuthenticationPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 20: Authentication`}
      src={Chapter20AuthenticationImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter20AuthenticationPage;
