import { AccountManagementMyAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementMyAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`My Apps`}
      src={AccountManagementMyAppsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementMyAppsPage;
