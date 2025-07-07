"use client";

import { VisitingPatientsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const VisitingPatientsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / Part VIII / Visiting patients`}
      src={VisitingPatientsImage}
      backRoute="/mental-health-act-1983-part-8"
      amendmentButtonRoute="/ac-visiting-patients"
    />
  );
};

export default VisitingPatientsPage;
