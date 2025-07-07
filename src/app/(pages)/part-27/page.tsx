"use client";

import { Part27Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part27Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / Supplemental`}
      src={Part27Image}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-supplemental"
    />
  );
};

export default Part27Page;
