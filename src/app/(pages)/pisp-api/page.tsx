"use client";
import React from "react";
import { FcaApplicationPageImageone } from "@/assets";
import { FcaApplicationPageImagetwo } from "@/assets";
import { FcaApplicationPageImagethree  } from "@/assets";
import { FcaApplicationPageImagefour  } from "@/assets";
import { FcaApplicationPageImage5 } from "@/assets";
import { FcaApplicationPageImage6 } from "@/assets";
import { FcaApplicationPageImage7 } from "@/assets";
import { FcaApplicationPageImage8 } from "@/assets";
import { FcaApplicationPageImage9 } from "@/assets";
import { FcaApplicationPageImage10 } from "@/assets";
import { FcaApplicationPageImage11 } from "@/assets";
import { FcaApplicationPageImage12 } from "@/assets";
import { FcaApplicationPageImage13 } from "@/assets";
import { FcaApplicationPageImage14 } from "@/assets";
import { FcaApplicationPageImage15 } from "@/assets";
import { FcaApplicationPageImage16 } from "@/assets";
import { FcaApplicationPageImage17 } from "@/assets";
import { FcaApplicationPageImage18 } from "@/assets";
import { FcaApplicationPageImage19 } from "@/assets";
import { FcaApplicationPageImage20 } from "@/assets";
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const FcaApplicationPagePage = () => {
  return (
    <MultiImagesAmendmentComparisonBtn
      images={[
        { src: FcaApplicationPageImageone, route: "/pisp-api", alt: "Image 1" },
        { src: FcaApplicationPageImagetwo, route: "/pisp-api-filling-in-the-form", alt: "Image 2" },
        { src: FcaApplicationPageImagethree , route: "/pisp-api-section-1-identification-details-and-timings", alt: "Image 3" },
        { src: FcaApplicationPageImagefour , route: "/pisp-api-section-2-programme-of-operations", alt: "Image 4" },
        { src: FcaApplicationPageImage5, route: "/pisp-api-section-3-business-plan", alt: "Image 5" },
        { src: FcaApplicationPageImage6, route: "/pisp-api-section-4-structural-organisation", alt: "Image 6" },
        { src: FcaApplicationPageImage7, route: "/pisp-api-section-5-evidence-of-initial-capital", alt: "Image 7" },
        { src: FcaApplicationPageImage8, route: "/pisp-api-section-6-measures-to-safeguard-the-funds-of-payment-service-users", alt: "Image 8" },
        { src: FcaApplicationPageImage9, route: "/pisp-api-section-7-procedure-to-monitor-handle-and-follow-up-on-a-security-incident-and-security-related-customer-complaints", alt: "Image 9" },
        { src: FcaApplicationPageImage10, route: "/pisp-api-section-8-procedure-to-monitor-handle-and-follow-up-on-a-security-incident-and-security-related-customer-complaints", alt: "Image 10" },
        { src: FcaApplicationPageImage11, route: "/pisp-api-process-in-place-to-file-monitor-track-and-restrict-access-to-sensitive-payment-data", alt: "Image 11" },
        { src: FcaApplicationPageImage12, route: "/pisp-api-business-continuity-arrangements", alt: "Image 12" },
        { src: FcaApplicationPageImage13, route: "/pisp-api-the-principles-and-definitions-applicable-to-the-collection-of-statistical-data-on-performance-transactions-and-fraud", alt: "Image 13" },
        { src: FcaApplicationPageImage14, route: "/pisp-api-security-policy-document", alt: "Image 14" },
        { src: FcaApplicationPageImage15, route: "/ppisp-api-internal-control-mechanisms-to-comply-with-obligations-in-relation-to-money-laundering-and-terrorist-financing", alt: "Image 15" },
        { src: FcaApplicationPageImage16, route: "/pisp-api-section-14", alt: "Image 16" },
        { src: FcaApplicationPageImage17, route: "/pisp-api-section-15", alt: "Image 17" },
        { src: FcaApplicationPageImage18, route: "/pisp-api-section-16-professional-indemnity-insurance-pii-or-comparable-guarantee", alt: "Image 18" },
        { src: FcaApplicationPageImage19, route: "/pisp-api-section-17-professional-indemnity-insurance-pii-or-comparable-guarantee", alt: "Image 19" },
        { src: FcaApplicationPageImage20, route: "/pisp-api-section-18-fees-and-levies", alt: "Image 20" },
      ]}
      pageTitle="FCA Application Main"
      backRoute="/payment-service-new-authorisation-registration"
      amendmentButtonRoute1="/pisp-api"
      amendmentButtonTitle1="Reference Doc"
      amendmentButtonRoute2="/pisp-api-terms-in-application-pack"
      amendmentButtonTitle2="KEY TERMS"
    />
  );
};

export default FcaApplicationPagePage;
