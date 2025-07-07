"use client";

import { HospitalAndGuardianshipOrdersImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const HospitalAndGuardianshipOrdersPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Hospital and guardianship orders     `}
      src={HospitalAndGuardianshipOrdersImage}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-2-amendment-comparison"
    />
  );
};

export default HospitalAndGuardianshipOrdersPage;
