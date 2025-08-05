import { AccountManagementEventsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementEventsPage = () => {
  return (
    <CommonPage
      pageTitle={`Events`}
      src={AccountManagementEventsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementEventsPage;
