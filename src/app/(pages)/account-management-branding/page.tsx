import { AccountManagementBrandingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementBrandingPage = () => {
  return (
    <CommonPage
      pageTitle={`Branding`}
      src={AccountManagementBrandingImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementBrandingPage;
