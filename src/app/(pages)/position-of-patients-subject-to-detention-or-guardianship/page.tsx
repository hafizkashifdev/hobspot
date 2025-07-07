"use client";

import { PositionOfPatientsSubjectToDetentionOrGuardianshipImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const PositionOfPatientsSubjectToDetentionOrGuardianshipPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / Position of patients subject to detention or guardianship`}
      src={PositionOfPatientsSubjectToDetentionOrGuardianshipImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-position-of-patients-subject-to-detention-or-guardianship"
    />
  );
};

export default PositionOfPatientsSubjectToDetentionOrGuardianshipPage;
