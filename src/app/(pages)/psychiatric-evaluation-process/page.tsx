import React from "react";
import { section7 } from "@/assets";
import { CommonPage } from "@/components";

const PsychiatricEvaluationProcessPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Psychiatric Evaluation"
        backRoute="/court-hearing"
        src={section7}
      />
    </div>
  );
};
export default PsychiatricEvaluationProcessPage;
