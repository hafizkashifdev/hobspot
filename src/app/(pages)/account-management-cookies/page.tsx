import { AccountManagementCookiesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementCookiesPage = () => {
  return (
    <CommonPage
      pageTitle={`Cookies`}
      src={AccountManagementCookiesImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementCookiesPage;
