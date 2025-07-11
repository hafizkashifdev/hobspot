"use client";

import { Part10SupplementaryImageACc } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part10SupplementaryPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part X / Supplementary`}
      src={Part10SupplementaryImageACc}
      backRoute="/mental-health-act-1983-part-9"
      amendmentButtonRoute="/part-10-supplementary-ac"
    />
  );
};

export default Part10SupplementaryPage;
