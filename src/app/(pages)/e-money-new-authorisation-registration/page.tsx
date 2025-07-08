"use client";
import { MultiPathPage } from "@/components";
import {
  img1EMoneyNewAuthorisationRegistrationImage,
  img2EMoneyNewAuthorisationRegistrationImage
} from "@/assets";
import React from "react";

const EMoneyNewAuthorisationRegistrationPageData = [
  {
    key: "e-1",
    link: "/fca-application-e-money-new-authorisation-registration-aemi",
    icon: img1EMoneyNewAuthorisationRegistrationImage,
    title: "AEMI – Authorised Electronic Money Institution",
  },
  {
    key: "e-2",
    link: "/semi",
    icon: img2EMoneyNewAuthorisationRegistrationImage,
    title: "Application for Registration as a Small Electronic Money  Institution (SEMI)",
  }
];

const EMoneyNewAuthorisationRegistrationPage = () => {
  return (
    <MultiPathPage
      arrayData={EMoneyNewAuthorisationRegistrationPageData}
      pageTitle="E-Money New Authorisation / Registration"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default EMoneyNewAuthorisationRegistrationPage;
