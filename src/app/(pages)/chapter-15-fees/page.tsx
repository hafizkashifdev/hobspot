import { Chapter15FeesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter15FeesPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 15: Fees`}
      src={Chapter15FeesImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter15FeesPage;
