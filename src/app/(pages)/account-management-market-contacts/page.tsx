import { AccountManagementMarketContactsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementMarketContactsPage = () => {
  return (
    <CommonPage
      pageTitle={`Market Contacts `}
      src={AccountManagementMarketContactsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementMarketContactsPage;
