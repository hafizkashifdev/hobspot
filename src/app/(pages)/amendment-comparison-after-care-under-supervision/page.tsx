import { AmendmentComparisonAfterCareUnderSupervisionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonAfterCareUnderSupervisionPage = () => {
  return (
    <CommonPage
      pageTitle={`Amendment Comparison     `}
      src={AmendmentComparisonAfterCareUnderSupervisionImage}
      backRoute="/after-care-under-supervision"
    />
  );
};

export default AmendmentComparisonAfterCareUnderSupervisionPage;
