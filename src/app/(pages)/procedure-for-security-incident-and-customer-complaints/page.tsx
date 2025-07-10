import { ProcedureForSecurityIncidentAndCustomerComplaintsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProcedureForSecurityIncidentAndCustomerComplaintsPage = () => {
  return (
    <CommonPage
      pageTitle={`Procedure for security incident and customer complaints`}
      src={ProcedureForSecurityIncidentAndCustomerComplaintsImage}
      backRoute="/pisp_spi"
    />
  );
};

export default ProcedureForSecurityIncidentAndCustomerComplaintsPage;
