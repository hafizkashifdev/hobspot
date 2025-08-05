import { CrmTickets07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets07Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 07`}
      src={CrmTickets07Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets07Page;
