import { WorkflowManageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WorkflowManagePage = () => {
  return (
    <CommonPage
      pageTitle={`Workflow - Manage`}
      src={WorkflowManageImage}
      backRoute="/workflows-main"
    />
  );
};

export default WorkflowManagePage;
