import { AccountManagementFeatureReleaseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementFeatureReleasePage = () => {
  return (
    <CommonPage
      pageTitle={`Feature Release`}
      src={AccountManagementFeatureReleaseImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementFeatureReleasePage;
