"use client";

import { Part10MiscellaneousAndSupplementaryImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part10MiscellaneousAndSupplementaryPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE Part 10 - Miscellaneous and Supplementary`}
      src={Part10MiscellaneousAndSupplementaryImage}
      backRoute="/mental-health-act-1983-part-9"
      amendmentButtonRoute="/part-10-miscellaneous-and-supplementary-ac"
    />
  );
};

export default Part10MiscellaneousAndSupplementaryPage;
