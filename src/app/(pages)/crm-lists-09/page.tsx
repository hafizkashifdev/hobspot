import { CrmLists09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 09`}
      src={CrmLists09Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists09Page;
