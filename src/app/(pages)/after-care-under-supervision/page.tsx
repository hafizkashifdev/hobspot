"use client";

import { AfterCareUnderSupervisionImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AfterCareUnderSupervisionPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / After-care under supervision`}
      src={AfterCareUnderSupervisionImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-after-care-under-supervision"
    />
  );
};

export default AfterCareUnderSupervisionPage;
