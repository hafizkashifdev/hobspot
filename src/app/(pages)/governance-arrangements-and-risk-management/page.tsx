import { GovernanceArrangementsAndRiskManagementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GovernanceArrangementsAndRiskManagementPage = () => {
  return (
    <CommonPage
      pageTitle="Governance arrangements and risk management"
      src={GovernanceArrangementsAndRiskManagementImage}
      backRoute="/semi"
    />
  );
};

export default GovernanceArrangementsAndRiskManagementPage;
