import { Chapter14EnforcementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter14EnforcementPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 14: Enforcement`}
      src={Chapter14EnforcementImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter14EnforcementPage;
