import { AccountManagementTrackingUrlImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementTrackingUrlPage = () => {
  return (
    <CommonPage
      pageTitle={`Tracking URL`}
      src={AccountManagementTrackingUrlImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementTrackingUrlPage;
