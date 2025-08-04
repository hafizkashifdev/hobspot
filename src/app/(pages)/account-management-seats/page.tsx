import { AccountManagementSeatsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementSeatsPage = () => {
  return (
    <CommonPage
      pageTitle={`Seats`}
      src={AccountManagementSeatsImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementSeatsPage;
