import { CrmTasks09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 09`}
      src={CrmTasks09Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks09Page;
