import { HubspotWorkspaceSalesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HubspotWorkspaceSalesPage = () => {
  return (
    <CommonPage
      pageTitle={`Workspace _ Sales`}
      src={HubspotWorkspaceSalesImage}
      backRoute="/workspace-sales"
    />
  );
};

export default HubspotWorkspaceSalesPage;
