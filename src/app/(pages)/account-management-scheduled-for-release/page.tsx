import { AccountManagementScheduledForReleaseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementScheduledForReleasePage = () => {
  return (
    <CommonPage
      pageTitle={`Scheduled for release`}
      src={AccountManagementScheduledForReleaseImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementScheduledForReleasePage;
