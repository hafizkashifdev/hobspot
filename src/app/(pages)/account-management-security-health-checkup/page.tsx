import { AccountManagementSecurityHealthCheckupImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementSecurityHealthCheckupPage = () => {
  return (
    <CommonPage
      pageTitle={`Security Health Checkup`}
      src={AccountManagementSecurityHealthCheckupImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementSecurityHealthCheckupPage;
