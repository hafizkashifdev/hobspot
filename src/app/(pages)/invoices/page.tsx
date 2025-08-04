import { InvoicesImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvoicesPage = () => {
  return (
    <CommonPage
      pageTitle={`Invoices`}
      src={InvoicesImage1}
      backRoute="/invoice-main"
    />
  );
};

export default InvoicesPage;
