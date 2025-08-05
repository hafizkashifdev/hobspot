import { AccountManagementTeamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementTeamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Teams`}
      src={AccountManagementTeamsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementTeamsPage;
