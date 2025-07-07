"use client";

import { Part4aTreatmentOfCommunityPatientsNotRecalledToHospitalImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part4aTreatmentOfCommunityPatientsNotRecalledToHospitalPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Amendment Comparison`}
      src={Part4aTreatmentOfCommunityPatientsNotRecalledToHospitalImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/amendment-comparison-part-4a-treatment-of-community-patients-not-recalled-to-hospital"
    />
  );
};

export default Part4aTreatmentOfCommunityPatientsNotRecalledToHospitalPage;
