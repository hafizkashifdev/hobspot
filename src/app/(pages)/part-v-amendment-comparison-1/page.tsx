import { PartVAmendmentComparison1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartVAmendmentComparison1Page = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={PartVAmendmentComparison1Image}
      backRoute="/constitution-etc" // Use the processed backRoute here
    />
  );
};

export default PartVAmendmentComparison1Page;
