import { CreateChatFlowStep2WorkspaceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateChatFlowStep2WorkspacePage = () => {
  return (
    <CommonPage
      pageTitle={`Create Chat flow_Step 2: Workspace`}
      src={CreateChatFlowStep2WorkspaceImage}
      backRoute="/chatflows-main"
    />
  );
};

export default CreateChatFlowStep2WorkspacePage;
