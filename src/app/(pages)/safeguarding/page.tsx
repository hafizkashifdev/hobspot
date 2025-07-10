import React from "react";
import { CommonPage } from "@/components";
import { SafeguardingImage } from "@/assets";

const SafeguardingPage = () => {
  return (
    <CommonPage
      pageTitle={`Safeguarding`}
      src={SafeguardingImage}
      backRoute="/pisp_spi"
    />
  );
};

export default SafeguardingPage;
