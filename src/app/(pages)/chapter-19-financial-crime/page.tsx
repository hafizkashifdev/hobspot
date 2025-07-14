import { Chapter19FinancialCrimeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter19FinancialCrimePage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 19: Financial Crime`}
      src={Chapter19FinancialCrimeImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter19FinancialCrimePage;
