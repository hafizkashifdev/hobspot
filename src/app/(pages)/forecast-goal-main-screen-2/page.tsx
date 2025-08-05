import { ForecastGoalMainScreen2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ForecastGoalMainScreen2Page = () => {
  return (
    <CommonPage
      pageTitle={`Forecast Goal Main Screen`}
      src={ForecastGoalMainScreen2Image}
      backRoute="/forecast-and-goals"
    />
  );
};

export default ForecastGoalMainScreen2Page;
