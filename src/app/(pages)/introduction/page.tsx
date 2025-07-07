"use client";

import { IntroductionImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IntroductionPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Introduction`}
      src={IntroductionImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/amendment-comparison-introduction"
    />
  );
};

export default IntroductionPage;
