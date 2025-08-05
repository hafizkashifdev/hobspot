import { AccountManagementCommerceAccountsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementCommerceAccountsPage = () => {
  return (
    <CommonPage
      pageTitle={`Commerce accounts`}
      src={AccountManagementCommerceAccountsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementCommerceAccountsPage;
