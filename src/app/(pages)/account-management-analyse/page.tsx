import { AccountManagementAnalyseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAnalysePage = () => {
  return (
    <CommonPage
      pageTitle={`Analyse`}
      src={AccountManagementAnalyseImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAnalysePage;
