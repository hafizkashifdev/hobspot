import { CrmTickets09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 09`}
      src={CrmTickets09Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets09Page;
