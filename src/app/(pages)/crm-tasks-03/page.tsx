import { CrmTasks03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 03`}
      src={CrmTasks03Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks03Page;
