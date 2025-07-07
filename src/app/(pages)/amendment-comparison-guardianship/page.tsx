import { AmendmentComparisonGuardianshipImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonGuardianshipPage = () => {
  return (
    <CommonPage
      pageTitle={`Amendment Comparison       `}
      src={AmendmentComparisonGuardianshipImage}
      backRoute="/guardianship"
    />
  );
};

export default AmendmentComparisonGuardianshipPage;
