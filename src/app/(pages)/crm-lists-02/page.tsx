import { CrmLists02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 02`}
      src={CrmLists02Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists02Page;
