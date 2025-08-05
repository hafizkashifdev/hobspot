import { CrmCalls02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCalls02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Calls 02`}
      src={CrmCalls02Image}
      backRoute="/crm-calls"
    />
  );
};

export default CrmCalls02Page;
