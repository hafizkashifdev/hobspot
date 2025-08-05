import { AccountManagementDataPrivacyConsentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementDataPrivacyConsentPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Privacy & Consent`}
      src={AccountManagementDataPrivacyConsentImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementDataPrivacyConsentPage;
