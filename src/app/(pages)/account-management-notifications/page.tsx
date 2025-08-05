import { AccountManagementNotificationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementNotificationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Notifications`}
      src={AccountManagementNotificationsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementNotificationsPage;
