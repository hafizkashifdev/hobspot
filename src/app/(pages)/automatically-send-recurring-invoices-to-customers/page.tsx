import { AutomaticallySendRecurringInvoicesToCustomersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AutomaticallySendRecurringInvoicesToCustomersPage = () => {
  return (
    <CommonPage
      pageTitle={`Automatically Send Recurring Invoices to customers`}
      src={AutomaticallySendRecurringInvoicesToCustomersImage}
      backRoute="/subscriptions-main"
    />
  );
};

export default AutomaticallySendRecurringInvoicesToCustomersPage;
