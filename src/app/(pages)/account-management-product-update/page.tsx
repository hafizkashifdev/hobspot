import { AccountManagementProductUpdateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementProductUpdatePage = () => {
  return (
    <CommonPage
      pageTitle={`Product Update`}
      src={AccountManagementProductUpdateImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementProductUpdatePage;
