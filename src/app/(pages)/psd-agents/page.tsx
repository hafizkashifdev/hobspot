import { PsdAgentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PsdAgentsPage = () => {
  return (
    <CommonPage
      pageTitle={`PSD Agents`}
      src={PsdAgentsImage}
      backRoute="//pisp_spi"
    />
  );
};

export default PsdAgentsPage;
