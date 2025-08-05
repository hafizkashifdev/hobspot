import { AccountManagementRulesetsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementRulesetsPage = () => {
  return (
    <CommonPage
      pageTitle={`Rulesets`}
      src={AccountManagementRulesetsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementRulesetsPage;
