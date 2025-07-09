"use client";

import { Part3SupplementalImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part3SupplementalPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Part 3 Supplemental`}
      src={Part3SupplementalImage}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="/supplemental-part-part-iii-ac"
    />
  );
};

export default Part3SupplementalPage;
