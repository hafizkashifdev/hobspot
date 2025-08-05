import { AgentCreationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgentCreationPage = () => {
  return (
    <CommonPage
      pageTitle={`Agent Creation`}
      src={AgentCreationImage}
      backRoute="/breeze-main"
    />
  );
};

export default AgentCreationPage;
