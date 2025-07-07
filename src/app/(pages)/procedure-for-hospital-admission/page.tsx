"use client";

import { ProcedureForHospitalAdmissionImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ProcedureForHospitalAdmissionPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part II / Procedure for hospital admission `}
      src={ProcedureForHospitalAdmissionImage}
      backRoute="/mental-health-act-1983-part-ii"
      amendmentButtonRoute="/amendment-comparison-procedure-for-hospital-admission"
    />
  );
};

export default ProcedureForHospitalAdmissionPage;
