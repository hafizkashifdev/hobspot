import { AccountManagementAnalyticsViewsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAnalyticsViewsPage = () => {
  return (
    <CommonPage
      pageTitle={`Analytics Views`}
      src={AccountManagementAnalyticsViewsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAnalyticsViewsPage;
