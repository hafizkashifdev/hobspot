import { AccountManagementAiImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementAiPage = () => {
  return (
    <CommonPage
      pageTitle={`AI`}
      src={AccountManagementAiImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementAiPage;
