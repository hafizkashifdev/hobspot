import { AccountManagementEmailServiceProviderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementEmailServiceProviderPage = () => {
  return (
    <CommonPage
      pageTitle={`Email Service PRovider`}
      src={AccountManagementEmailServiceProviderImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementEmailServiceProviderPage;
