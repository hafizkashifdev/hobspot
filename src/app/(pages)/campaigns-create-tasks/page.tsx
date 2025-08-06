import { CampaignsCreateTasksImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsCreateTasksPage = () => {
  return (
    <CommonPage
      pageTitle={` Create Tasks  `}
      src={CampaignsCreateTasksImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsCreateTasksPage;
