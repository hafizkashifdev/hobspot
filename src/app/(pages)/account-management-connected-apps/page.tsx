import { AccountManagementConnectedAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementConnectedAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`Connected Apps`}
      src={AccountManagementConnectedAppsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementConnectedAppsPage;
