import { UnrelatedPaymentServicesSec1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UnrelatedPaymentServicesSec1Page = () => {
  return (
    <CommonPage
      pageTitle="Unrelated payment services"
      src={UnrelatedPaymentServicesSec1Image}
      backRoute="/fca-application-e-money-new-authorisation-registration-aemi"
    />
  );
};

export default UnrelatedPaymentServicesSec1Page;
