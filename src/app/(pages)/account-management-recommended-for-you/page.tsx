import { AccountManagementRecommendedForYouImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountManagementRecommendedForYouPage = () => {
  return (
    <CommonPage
      pageTitle={`Recommended for you`}
      src={AccountManagementRecommendedForYouImage}
      backRoute="/settings-account-management"
    />
  );
};

export default AccountManagementRecommendedForYouPage;
