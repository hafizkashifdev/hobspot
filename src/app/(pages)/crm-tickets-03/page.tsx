import { CrmTickets03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 03`}
      src={CrmTickets03Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets03Page;
