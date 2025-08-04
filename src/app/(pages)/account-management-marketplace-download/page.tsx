import { AccountManagementMarketplaceDownloadImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementMarketplaceDownloadPage = () => {
  return (
    <CommonPage
      pageTitle={`Marketplace Download`}
      src={AccountManagementMarketplaceDownloadImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementMarketplaceDownloadPage;
