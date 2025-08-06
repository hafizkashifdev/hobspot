import { CrmTickets02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 02`}
      src={CrmTickets02Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets02Page;
