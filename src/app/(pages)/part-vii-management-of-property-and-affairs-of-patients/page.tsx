"use client";

import { PartViiManagementOfPropertyAndAffairsOfPatientsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const PartViiManagementOfPropertyAndAffairsOfPatientsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII /  Management of Property and Affairs of Patients`}
      src={PartViiManagementOfPropertyAndAffairsOfPatientsImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/amendment-comparison-part-vii-management-of-property-and-affairs-of-patients"
    />
  );
};

export default PartViiManagementOfPropertyAndAffairsOfPatientsPage;
