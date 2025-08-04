import { AccountManagementMarketplaceModuleImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementMarketplaceModulePage = () => {
  return (
    <CommonPage
      pageTitle={`Marketplace (Module)`}
      src={AccountManagementMarketplaceModuleImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementMarketplaceModulePage;
