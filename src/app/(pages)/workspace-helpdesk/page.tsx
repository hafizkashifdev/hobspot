import { WorkspaceHelpdeskImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Workspace _ Helpdesk",
    title: "Workspace _ Helpdesk",
    href: "/1-hubspot-workspace-helpdesk",
    coords: "16,37,293,104",
    shape: "rect",
  },
  {
    alt: "Detailed Ticket View Screen",
    title: "Detailed Ticket View Screen",
    href: "/2-hubspot-workspace-helpdesk-detailed-ticket-view-screen",
    coords: "21,1113,532,1176",
    shape: "rect",
  },
];

const WorkspaceHelpdeskPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Workspace _ HelpDesk`}
      image={WorkspaceHelpdeskImage}
      backRoute="/hubspot-workspace"
      areas={areas}
    />
  );
};

export default WorkspaceHelpdeskPage;
