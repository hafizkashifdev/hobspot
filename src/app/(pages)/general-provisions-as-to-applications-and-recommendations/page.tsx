"use client";

import { GeneralProvisionsAsToApplicationsAndRecommendationsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GeneralProvisionsAsToApplicationsAndRecommendationsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / General provisions as to applications and recommendations`}
      src={GeneralProvisionsAsToApplicationsAndRecommendationsImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-general-provisions-as-to-applications-and-recommendations"
    />
  );
};

export default GeneralProvisionsAsToApplicationsAndRecommendationsPage;
