import { PartVAmendmentComparison3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartVAmendmentComparison3Page = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={PartVAmendmentComparison3Image}
      backRoute="/applications-and-references-part-iii-patients" // Use the processed backRoute here
    />
  );
};

export default PartVAmendmentComparison3Page;
