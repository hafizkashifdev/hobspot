import { AccountManagementSettingsActivityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementSettingsActivityPage = () => {
  return (
    <CommonPage
      pageTitle={`Settings & Activity`}
      src={AccountManagementSettingsActivityImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementSettingsActivityPage;
