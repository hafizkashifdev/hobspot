import { AccountManagementAccessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAccessPage = () => {
  return (
    <CommonPage
      pageTitle={`Access`}
      src={AccountManagementAccessImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAccessPage;
