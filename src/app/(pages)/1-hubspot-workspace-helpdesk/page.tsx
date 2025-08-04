import { HubspotWorkspaceHelpdeskImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HubspotWorkspaceHelpdeskPage = () => {
  return (
    <CommonPage
      pageTitle={`Workspace _ Helpdesk`}
      src={HubspotWorkspaceHelpdeskImage}
      backRoute="/workspace-helpdesk"
    />
  );
};

export default HubspotWorkspaceHelpdeskPage;
