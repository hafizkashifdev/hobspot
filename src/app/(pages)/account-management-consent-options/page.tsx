import { AccountManagementConsentOptionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementConsentOptionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Consent Options`}
      src={AccountManagementConsentOptionsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementConsentOptionsPage;
