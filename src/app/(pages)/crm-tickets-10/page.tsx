import { CrmTickets10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets10Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 10`}
      src={CrmTickets10Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets10Page;
