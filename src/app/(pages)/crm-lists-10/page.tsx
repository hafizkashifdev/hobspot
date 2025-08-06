import { CrmLists10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists10Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 10`}
      src={CrmLists10Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists10Page;
