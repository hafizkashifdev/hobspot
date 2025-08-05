import { AccountManagementPrivacyConsentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementPrivacyConsentPage = () => {
  return (
    <CommonPage
      pageTitle={`Privacy & Consent`}
      src={AccountManagementPrivacyConsentImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementPrivacyConsentPage;
