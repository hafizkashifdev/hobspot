import { AccountManagementCurrenciesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementCurrenciesPage = () => {
  return (
    <CommonPage
      pageTitle={`Currencies`}
      src={AccountManagementCurrenciesImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementCurrenciesPage;
