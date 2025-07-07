import { AcAfterCareImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AcAfterCarePage = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={AcAfterCareImage}
      backRoute="/after-care"
    />
  );
};

export default AcAfterCarePage;
