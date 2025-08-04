import { AccountManagementPrivateAppImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementPrivateAppPage = () => {
  return (
    <CommonPage
      pageTitle={`Private App`}
      src={AccountManagementPrivateAppImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementPrivateAppPage;
