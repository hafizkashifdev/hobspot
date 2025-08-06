import { CrmTickets06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTickets06Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tickets 06`}
      src={CrmTickets06Image}
      backRoute="/crm-tickets"
    />
  );
};

export default CrmTickets06Page;
