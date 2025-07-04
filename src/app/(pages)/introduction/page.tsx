"use client";

import { IntroductionImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IntroductionPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Introduction`}
      src={IntroductionImage}
      backRoute="/"
      amendmentButtonRoute="/introduction"
    />
  );
};

export default IntroductionPage;
