import { AccountManagementReportsAnalyticsTrackingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementReportsAnalyticsTrackingPage = () => {
  return (
    <CommonPage
      pageTitle={`Reports & Analytics Tracking`}
      src={AccountManagementReportsAnalyticsTrackingImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementReportsAnalyticsTrackingPage;
