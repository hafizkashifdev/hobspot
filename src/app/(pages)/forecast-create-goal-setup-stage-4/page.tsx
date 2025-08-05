import { ForecastCreateGoalSetupStage4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ForecastCreateGoalSetupStage4Page = () => {
  return (
    <CommonPage
      pageTitle={`Forecast Create Goal Setup Stage`}
      src={ForecastCreateGoalSetupStage4Image}
      backRoute="/forecast-and-goals"
    />
  );
};

export default ForecastCreateGoalSetupStage4Page;
