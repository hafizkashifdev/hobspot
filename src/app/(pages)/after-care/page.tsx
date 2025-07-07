"use client";

import { AfterCareImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AfterCarePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / Part VIII / After care`}
      src={AfterCareImage}
      backRoute="/mental-health-act-1983-part-8"
      amendmentButtonRoute="/ac-after-care"
    />
  );
};

export default AfterCarePage;
