import { CrmTickets08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 08`}
      src={CrmTickets08Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets08Page;
