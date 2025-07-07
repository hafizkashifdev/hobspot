"use client";

import { DurationOfDetentionOrGuardianshipAndDischargeImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const DurationOfDetentionOrGuardianshipAndDischargePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / Duration of detention or guardianship and discharge`}
      src={DurationOfDetentionOrGuardianshipAndDischargeImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-duration-of-detention-or-guardianship-and-discharge"
    />
  );
};

export default DurationOfDetentionOrGuardianshipAndDischargePage;
