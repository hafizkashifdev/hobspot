import { CrmTasks08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 08`}
      src={CrmTasks08Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks08Page;
