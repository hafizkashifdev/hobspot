"use client";

import { GuardianshipImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GuardianshipPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / Guardianship          `}
      src={GuardianshipImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-guardianship"
    />
  );
};

export default GuardianshipPage;
