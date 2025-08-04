import { AccountManagementSecurityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementSecurityPage = () => {
  return (
    <CommonPage
      pageTitle={`Security`}
      src={AccountManagementSecurityImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementSecurityPage;
