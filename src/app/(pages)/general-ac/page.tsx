import { GeneralAcImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GeneralAcPage = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={GeneralAcImage}
      backRoute="general"
    />
  );
};

export default GeneralAcPage;
