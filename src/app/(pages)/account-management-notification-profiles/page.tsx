import { AccountManagementNotificationProfilesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementNotificationProfilesPage = () => {
  return (
    <CommonPage
      pageTitle={`Notification Profiles`}
      src={AccountManagementNotificationProfilesImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementNotificationProfilesPage;
