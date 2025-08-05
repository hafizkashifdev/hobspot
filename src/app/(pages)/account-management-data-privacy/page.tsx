import { AccountManagementDataPrivacyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementDataPrivacyPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Privacy`}
      src={AccountManagementDataPrivacyImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementDataPrivacyPage;
