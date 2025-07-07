"use client";

import { ApprovedMentalHealthProfessionalsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprovedMentalHealthProfessionalsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / Part VIII / Approved mental health professionals`}
      src={ApprovedMentalHealthProfessionalsImage}
      backRoute="/mental-health-act-1983-part-8"
      amendmentButtonRoute="/approved-mental-health-professionals-ac"
    />
  );
};

export default ApprovedMentalHealthProfessionalsPage;
