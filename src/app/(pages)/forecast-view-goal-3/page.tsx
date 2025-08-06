import { ForecastViewGoal3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ForecastViewGoal3Page = () => {
  return (
    <CommonPage
      pageTitle={`Forecast View  Goal`}
      src={ForecastViewGoal3Image}
      backRoute="/forecast-and-goals"
    />
  );
};

export default ForecastViewGoal3Page;
