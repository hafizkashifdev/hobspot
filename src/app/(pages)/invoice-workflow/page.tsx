import { InvoiceWorkflowImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvoiceWorkflowPage = () => {
  return (
    <CommonPage
      pageTitle={`Invoice Workflow`}
      src={InvoiceWorkflowImage}
      backRoute="/invoice-main"
    />
  );
};

export default InvoiceWorkflowPage;
