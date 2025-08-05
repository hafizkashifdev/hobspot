import { AccountManagementNotificationConfigurationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementNotificationConfigurationPage = () => {
  return (
    <CommonPage
      pageTitle={`Notification Configuration`}
      src={AccountManagementNotificationConfigurationImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementNotificationConfigurationPage;
