import { AccountManagementUserDefaultImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementUserDefaultPage = () => {
  return (
    <CommonPage
      pageTitle={`User Default`}
      src={AccountManagementUserDefaultImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementUserDefaultPage;
