import { AccountManagementTrackingCodeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementTrackingCodePage = () => {
  return (
    <CommonPage
      pageTitle={`Tracking Code`}
      src={AccountManagementTrackingCodeImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementTrackingCodePage;
