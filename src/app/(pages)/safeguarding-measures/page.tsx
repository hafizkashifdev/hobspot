import { SafeguardingMeasuresImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SafeguardingMeasuresPage = () => {
  return (
    <CommonPage
      pageTitle="Safeguarding measures"
      src={SafeguardingMeasuresImage}
      backRoute="/semi"
    />
  );
};

export default SafeguardingMeasuresPage;
