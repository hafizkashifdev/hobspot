import { AccountManagementApprovalsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementApprovalsPage = () => {
  return (
    <CommonPage
      pageTitle={`Approvals`}
      src={AccountManagementApprovalsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementApprovalsPage;
