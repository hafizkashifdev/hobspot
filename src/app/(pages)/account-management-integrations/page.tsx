import { AccountManagementIntegrationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementIntegrationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Integrations`}
      src={AccountManagementIntegrationsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementIntegrationsPage;
