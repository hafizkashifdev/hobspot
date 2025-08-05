import { AccountManagementAllProductUpdateInDevelopmentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAllProductUpdateInDevelopmentPage = () => {
  return (
    <CommonPage
      pageTitle={`All product update in development`}
      src={AccountManagementAllProductUpdateInDevelopmentImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAllProductUpdateInDevelopmentPage;
