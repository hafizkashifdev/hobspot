import { TimingsForThisApplicationTimeFactorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TimingsForThisApplicationTimeFactorPage = () => {
  return (
    <CommonPage
      pageTitle={`Timings for this application(Time Factor)`}
      src={TimingsForThisApplicationTimeFactorImage}
      backRoute="/"
    />
  );
};

export default TimingsForThisApplicationTimeFactorPage;
