import { AccountManagementNewToYouImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementNewToYouPage = () => {
  return (
    <CommonPage
      pageTitle={`New to you`}
      src={AccountManagementNewToYouImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementNewToYouPage;
