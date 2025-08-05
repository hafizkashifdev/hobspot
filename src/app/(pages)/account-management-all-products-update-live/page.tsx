import { AccountManagementAllProductsUpdateLiveImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAllProductsUpdateLivePage = () => {
  return (
    <CommonPage
      pageTitle={`All Products update live`}
      src={AccountManagementAllProductsUpdateLiveImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAllProductsUpdateLivePage;
