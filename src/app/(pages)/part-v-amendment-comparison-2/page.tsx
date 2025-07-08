import { PartVAmendmentComparison2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartVAmendmentComparison2Page = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={PartVAmendmentComparison2Image}
      backRoute="/applications-and-references-concerning-part-ii-patients" // Use the processed backRoute here
    />
  );
};

export default PartVAmendmentComparison2Page;
