import { AccountManagementDataHostingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementDataHostingPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Hosting`}
      src={AccountManagementDataHostingImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementDataHostingPage;
