import { AccountManagementRoutingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementRoutingPage = () => {
  return (
    <CommonPage
      pageTitle={`Routing`}
      src={AccountManagementRoutingImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementRoutingPage;
