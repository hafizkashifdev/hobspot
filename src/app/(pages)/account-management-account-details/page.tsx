import { AccountManagementAccountDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAccountDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Account Details`}
      src={AccountManagementAccountDetailsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAccountDetailsPage;
