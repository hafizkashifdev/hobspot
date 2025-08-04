import { AccountManagementTrackingCodeTcImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementTrackingCodeTcPage = () => {
  return (
    <CommonPage
      pageTitle={`Tracking Code TC`}
      src={AccountManagementTrackingCodeTcImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementTrackingCodeTcPage;
