import { AmendmentComparisonSupplementalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonSupplementalPage = () => {
  return (
    <CommonPage
      pageTitle={`Mental Health / Mental Health Act 1983 / Amendment Comparison - Supplemental    `}
      src={AmendmentComparisonSupplementalImage}
      backRoute="/mental-health-act-1983-part-ii"
    />
  );
};

export default AmendmentComparisonSupplementalPage;
