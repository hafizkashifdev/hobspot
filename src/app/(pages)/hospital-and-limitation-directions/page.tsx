"use client";

import { HospitalAndLimitationDirectionsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const HospitalAndLimitationDirectionsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Hospital and limitation directions`}
      src={HospitalAndLimitationDirectionsImage}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-4-amendment-comparison"
    />
  );
};

export default HospitalAndLimitationDirectionsPage;
