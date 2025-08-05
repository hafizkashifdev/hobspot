import { AccountManagementPresetsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementPresetsPage = () => {
  return (
    <CommonPage
      pageTitle={`Presets`}
      src={AccountManagementPresetsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementPresetsPage;
