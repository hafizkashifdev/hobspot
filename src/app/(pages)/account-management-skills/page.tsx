import { AccountManagementSkillsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementSkillsPage = () => {
  return (
    <CommonPage
      pageTitle={`Skills`}
      src={AccountManagementSkillsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementSkillsPage;
