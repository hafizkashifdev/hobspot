import { ForecastEditGoal7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ForecastEditGoal7Page = () => {
  return (
    <CommonPage
      pageTitle={`Forecast Edit  Goal`}
      src={ForecastEditGoal7Image}
      backRoute="/forecast-and-goals"
    />
  );
};

export default ForecastEditGoal7Page;
