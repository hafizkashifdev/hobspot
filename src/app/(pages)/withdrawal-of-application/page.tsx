import { WithdrawalOfApplicationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WithdrawalOfApplicationPage = () => {
  return (
    <CommonPage
      pageTitle={`Withdrawal of Application`}
      src={WithdrawalOfApplicationImage}
      backRoute="/care-quality-commission"
    />
  );
};

export default WithdrawalOfApplicationPage;
