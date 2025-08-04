import { AccountManagementDataSourcesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementDataSourcesPage = () => {
  return (
    <CommonPage
      pageTitle={`Data sources`}
      src={AccountManagementDataSourcesImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementDataSourcesPage;
