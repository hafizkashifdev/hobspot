import { Chapter12SupervisionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter12SupervisionPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 12: Supervision`}
      src={Chapter12SupervisionImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter12SupervisionPage;
