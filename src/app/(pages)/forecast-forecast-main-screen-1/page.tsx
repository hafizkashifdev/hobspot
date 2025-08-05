import { ForecastForecastMainScreen1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ForecastForecastMainScreen1Page = () => {
  return (
    <CommonPage
      pageTitle={`Forecast Forecast Main Screen`}
      src={ForecastForecastMainScreen1Image}
      backRoute="/forecast-and-goals"
    />
  );
};

export default ForecastForecastMainScreen1Page;
