import { CustomiseThankyouImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomiseThankyouPage = () => {
  return (
    <CommonPage
      pageTitle={`Customise _ Thankyou`}
      src={CustomiseThankyouImage}
      backRoute="/surveys-main"
    />
  );
};

export default CustomiseThankyouPage;
