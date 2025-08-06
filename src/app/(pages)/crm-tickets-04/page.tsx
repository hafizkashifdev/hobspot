import { CrmTickets04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets04Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 04`}
      src={CrmTickets04Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets04Page;
