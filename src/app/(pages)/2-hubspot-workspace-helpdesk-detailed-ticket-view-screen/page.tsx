import { HubspotWorkspaceHelpdeskDetailedTicketViewScreenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HubspotWorkspaceHelpdeskDetailedTicketViewScreenPage = () => {
  return (
    <CommonPage
      pageTitle={`Detailed Ticket View Screen`}
      src={HubspotWorkspaceHelpdeskDetailedTicketViewScreenImage}
      backRoute="/workspace-helpdesk"
    />
  );
};

export default HubspotWorkspaceHelpdeskDetailedTicketViewScreenPage;
