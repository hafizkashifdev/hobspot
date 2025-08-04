import { AccountManagementWebContentSetUpApprovalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementWebContentSetUpApprovalPage = () => {
  return (
    <CommonPage
      pageTitle={`Web Content- set up approval`}
      src={AccountManagementWebContentSetUpApprovalImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementWebContentSetUpApprovalPage;
