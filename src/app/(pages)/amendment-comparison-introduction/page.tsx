import { AmendmentComparisonIntroductionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonIntroductionPage = () => {
  return (
    <CommonPage
      pageTitle={`Amendment Comparison`}
      src={AmendmentComparisonIntroductionImage}
      backRoute="/introduction"
    />
  );
};

export default AmendmentComparisonIntroductionPage;
