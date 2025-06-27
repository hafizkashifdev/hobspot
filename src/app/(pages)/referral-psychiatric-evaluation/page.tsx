import React from "react";
import { section5 } from "@/assets";
import { CommonPage } from "@/components";

const ReferralPsychiatricEvaluationPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Referral for Psychiatric Evaluation"
        backRoute="/court-hearing"
        src={section5}
      />
    </div>
  );
};
export default ReferralPsychiatricEvaluationPage;
