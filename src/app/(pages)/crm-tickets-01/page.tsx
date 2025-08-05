import { CrmTickets01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 01`}
      src={CrmTickets01Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets01Page;
