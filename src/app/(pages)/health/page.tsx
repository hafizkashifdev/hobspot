import { HealthImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HealthPage = () => {
  return (
    <CommonPage
      pageTitle={`Health`}
      src={HealthImage}
      backRoute="/workflows-main"
    />
  );
};

export default HealthPage;
