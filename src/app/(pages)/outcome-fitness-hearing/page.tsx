import React from "react";
import { section2 } from "@/assets";
import { CommonPage } from "@/components";

const PsychiatricEvaluationProcessPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Outcome Fitness Hearing"
        backRoute="/court-hearing"
        src={section2}
      />
    </div>
  );
};
export default PsychiatricEvaluationProcessPage;
