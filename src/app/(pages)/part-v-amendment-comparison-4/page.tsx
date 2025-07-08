import { PartVAmendmentComparison4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartVAmendmentComparison4Page = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={PartVAmendmentComparison4Image}
      backRoute="/discharge-of-patients" // Use the processed backRoute here
    />
  );
};

export default PartVAmendmentComparison4Page;
