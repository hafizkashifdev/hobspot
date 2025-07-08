import { PartVAmendmentComparison5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartVAmendmentComparison5Page = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={PartVAmendmentComparison5Image}
      backRoute="/part-v-general" // Use the processed backRoute here
    />
  );
};

export default PartVAmendmentComparison5Page;
