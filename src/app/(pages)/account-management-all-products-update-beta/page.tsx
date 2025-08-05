import { AccountManagementAllProductsUpdateBetaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAllProductsUpdateBetaPage = () => {
  return (
    <CommonPage
      pageTitle={`All Products update beta`}
      src={AccountManagementAllProductsUpdateBetaImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAllProductsUpdateBetaPage;
