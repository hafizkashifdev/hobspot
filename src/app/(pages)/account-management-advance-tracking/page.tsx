import { AccountManagementAdvanceTrackingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAdvanceTrackingPage = () => {
  return (
    <CommonPage
      pageTitle={`Advance Tracking`}
      src={AccountManagementAdvanceTrackingImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAdvanceTrackingPage;
