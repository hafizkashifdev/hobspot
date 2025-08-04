import { AccountManagementSettingGeneral1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementSettingGeneral1Page = () => {
  return (
    <CommonPage
      pageTitle={`General`}
      src={AccountManagementSettingGeneral1Image}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementSettingGeneral1Page;
