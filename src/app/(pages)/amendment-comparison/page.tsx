import { AmendmentComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={`Amendment Comparison  `}
      src={AmendmentComparisonImage}
      backRoute="/introduction"
    />
  );
};

export default AmendmentComparisonPage;
