import React from "react";
import { section1 } from "@/assets";
import { CommonPage } from "@/components";

const FitnessStandTrialPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Court Hearing for Fitness to Stand Trial"
        backRoute="/court-hearing"
        src={section1}
      />
    </div>
  );
};
export default FitnessStandTrialPage;
