import { AccountManagementMarketplaceThemesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementMarketplaceThemesPage = () => {
  return (
    <CommonPage
      pageTitle={`Marketplace (Themes)`}
      src={AccountManagementMarketplaceThemesImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementMarketplaceThemesPage;
