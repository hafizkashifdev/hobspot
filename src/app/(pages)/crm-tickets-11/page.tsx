import { CrmTickets11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets11Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 11`}
      src={CrmTickets11Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets11Page;
