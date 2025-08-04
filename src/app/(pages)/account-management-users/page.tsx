import { AccountManagementUsersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementUsersPage = () => {
  return (
    <CommonPage
      pageTitle={`Users`}
      src={AccountManagementUsersImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementUsersPage;
