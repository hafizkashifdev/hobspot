import { Chapter11ComplaintsHandlingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter11ComplaintsHandlingPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 11: Complaints handling`}
      src={Chapter11ComplaintsHandlingImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter11ComplaintsHandlingPage;
