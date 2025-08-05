import { InvoiceTypesCustomizationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvoiceTypesCustomizationPage = () => {
  return (
    <CommonPage
      pageTitle={`Invoice Types & Customization`}
      src={InvoiceTypesCustomizationImage}
      backRoute="/invoice-main"
    />
  );
};

export default InvoiceTypesCustomizationPage;
