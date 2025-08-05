import { AccountManagementAuditLogImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAuditLogPage = () => {
  return (
    <CommonPage
      pageTitle={`Audit Log`}
      src={AccountManagementAuditLogImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAuditLogPage;
