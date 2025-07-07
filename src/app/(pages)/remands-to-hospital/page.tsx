"use client";

import { RemandsToHospitalImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RemandsToHospitalPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Remands to hospital `}
      src={RemandsToHospitalImage}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-1-amendment-comparison"
    />
  );
};

export default RemandsToHospitalPage;
