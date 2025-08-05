import { AccountManagementPermissionSetImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementPermissionSetPage = () => {
  return (
    <CommonPage
      pageTitle={`Permission Set`}
      src={AccountManagementPermissionSetImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementPermissionSetPage;
