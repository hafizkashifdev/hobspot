import { CreateWorkflowImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateWorkflowPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Workflow`}
      src={CreateWorkflowImage}
      backRoute="/workflows-main"
    />
  );
};

export default CreateWorkflowPage;
