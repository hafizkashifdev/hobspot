"use client";
import { MultiPathPage } from "@/components";
import {
  img1PaymentServicesNewAuthorisationRegistrationImage,
  img2PaymentServicesNewAuthorisationRegistrationImage,
  img3PaymentServicesNewAuthorisationRegistrationImage
} from "@/assets";
import React from "react";

const PaymentServicesNewAuthorisationRegistrationPageData = [
  {
    key: "payment-1",
    link: "/pisp-api",
    icon: img1PaymentServicesNewAuthorisationRegistrationImage,
    title: "PISP_API",
  },
  {
    key: "payment-2",
    link: "/spi",
    icon: img2PaymentServicesNewAuthorisationRegistrationImage,
    title: "PISP_SMALL Payment institution (SPI)",
  },
  {
    key: "payment-3",
    link: "/raisp",
    icon: img3PaymentServicesNewAuthorisationRegistrationImage,
    title: "/Registration As An Account information Service Provider (RAISP)",
  }
];

const PaymentServicesNewAuthorisationRegistrationPage = () => {
  return (
    <MultiPathPage
      arrayData={PaymentServicesNewAuthorisationRegistrationPageData}
      pageTitle="Payment Services New Authorisation / registration"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default PaymentServicesNewAuthorisationRegistrationPage;
