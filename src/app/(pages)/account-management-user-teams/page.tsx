import { AccountManagementUserTeamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementUserTeamsPage = () => {
  return (
    <CommonPage
      pageTitle={`User & Teams`}
      src={AccountManagementUserTeamsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementUserTeamsPage;
