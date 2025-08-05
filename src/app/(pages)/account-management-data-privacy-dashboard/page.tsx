import { AccountManagementDataPrivacyDashboardImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementDataPrivacyDashboardPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Privacy Dashboard`}
      src={AccountManagementDataPrivacyDashboardImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementDataPrivacyDashboardPage;
