import { AmendmentComparisonProcedureForHospitalAdmissionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonProcedureForHospitalAdmissionPage = () => {
  return (
    <CommonPage
      pageTitle={`Amendment Comparison         `}
      src={AmendmentComparisonProcedureForHospitalAdmissionImage}
      backRoute="/procedure-for-hospital-admission"
    />
  );
};

export default AmendmentComparisonProcedureForHospitalAdmissionPage;
