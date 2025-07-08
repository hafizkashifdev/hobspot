"use client";
import { MultiPathPage } from "@/components";
import {
  img1PartIvConsentToTreatmentImage,
  img2PartIvConsentToTreatmentImage
} from "@/assets";
import React from "react";

const PartIvConsentToTreatmentPageData = [
  {
    key: "part-1",
    link: "/part-iv-guardians-of-consent",
    icon: img1PartIvConsentToTreatmentImage,
    title: "Guardians of Consent",
  },
  {
    key: "part-2",
    link: "/part-iv-consent-and-treatment-safeguards",
    icon: img2PartIvConsentToTreatmentImage,
    title: "Consent and Treatment Safeguards",
  }
];

const PartIvConsentToTreatmentPage = () => {
  return (
    <MultiPathPage
      arrayData={PartIvConsentToTreatmentPageData}
      pageTitle="Part IV Consent to Treatment"
      backRoute="/mental-health-act-1983"
    />
  );
};

export default PartIvConsentToTreatmentPage;
