import { OtherTradingNamesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OtherTradingNamesPage = () => {
  return (
    <CommonPage
      pageTitle={`Other Trading Names`}
      src={OtherTradingNamesImage}
      backRoute="/"
    />
  );
};

export default OtherTradingNamesPage;
