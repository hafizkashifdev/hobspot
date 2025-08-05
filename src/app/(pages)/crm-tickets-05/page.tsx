import { CrmTickets05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 05`}
      src={CrmTickets05Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets05Page;
