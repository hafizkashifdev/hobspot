import { CustomiseEmailImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomiseEmailPage = () => {
  return (
    <CommonPage
      pageTitle={`Customise _ Email`}
      src={CustomiseEmailImage}
      backRoute="/surveys-main"
    />
  );
};

export default CustomiseEmailPage;
