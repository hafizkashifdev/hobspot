import { CrmTasks02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 02`}
      src={CrmTasks02Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks02Page;
