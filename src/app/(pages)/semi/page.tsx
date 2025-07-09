"use client";
import React from "react";
import { SemiImage } from "@/assets";
import { SemiImage1 } from "@/assets";
import { SemiImage2 } from "@/assets";
import { SemiImage3 } from "@/assets";
import { SemiImage4 } from "@/assets";
import { SemiImage5 } from "@/assets";
import { SemiImage6 } from "@/assets";
import { SemiImage7 } from "@/assets";
import { SemiImage8 } from "@/assets";
import { SemiImage9 } from "@/assets";
import { SemiImage10 } from "@/assets";
import { SemiImage11 } from "@/assets";
import { SemiImage12 } from "@/assets";
import { SemiImage13 } from "@/assets";
import { SemiImage14 } from "@/assets";
import { SemiImage15 } from "@/assets";
import { SemiImage16 } from "@/assets";
import { SemiImage17 } from "@/assets";
import { SemiImage18 } from "@/assets";
import { SemiImage19 } from "@/assets";
import { SemiImage20 } from "@/assets";
import { SemiImage21 } from "@/assets";
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const SemiPage = () => {
  return (
    <MultiImagesAmendmentComparisonBtn
      images={[
        { src: SemiImage, route: "/semi", alt: "Image" },
        { src: SemiImage1, route: "/identification-details-and-timings", alt: "Image 1" },
        { src: SemiImage2, route: "/Identification details and timings 1", alt: "Image 2" },
        { src: SemiImage3, route: "/Identification details and timings 2", alt: "Image 3" },
        { src: SemiImage4, route: "/Identification details and timings 3", alt: "Image 4" },
        { src: SemiImage5, route: "/SEMI", alt: "Image 5" },
        { src: SemiImage6, route: "/SEMI1", alt: "Image 6" },
        { src: SemiImage7, route: "/Conditions for registration 2", alt: "Image 7" },
        { src: SemiImage8, route: "/Conditions for registration 1", alt: "Image 8" },
        { src: SemiImage9, route: "/ Business plan", alt: "Image 9" },
        { src: SemiImage10, route: "/Capital resources and requirements", alt: "Image 10" },
        { src: SemiImage11, route: "/Capital resources and requirements 1", alt: "Image 11" },
        { src: SemiImage12, route: "/Capital resources and requirements 2", alt: "Image 12" },
        { src: SemiImage13, route: "/Safeguarding measures ", alt: "Image 13" },
        { src: SemiImage14, route: "/Unrelated payment services", alt: "Image 14" },
        { src: SemiImage15, route: "/Governance arrangements and risk management", alt: "Image 15" },
        { src: SemiImage16, route: "/Qualifying holdings and close links", alt: "Image 16" },
        { src: SemiImage17, route: "/Procedure to Monitor, Handle, and Follow Up on Security Incidents and Customer Complaints", alt: "Image 17" },
        { src: SemiImage18, route: "/Process in place to file, monitor, track and restrict access to sensitive payment data", alt: "Image 18" },
        { src: SemiImage19, route: "/The principles and definitions applicable to the collection of statistical data on performance, transactions and fraud", alt: "Image 19" },
        { src: SemiImage20, route: "/Security policy", alt: "Image 20" },
        { src: SemiImage21, route: "/Fees and levies", alt: "Image 21" },
        // { src: SemiImage22, route: "/SEMI2", alt: "Image 22" },
      ]}
      pageTitle="FCA Application/E-Money New Authorisation &  Registration/SEMI"
      amendmentButtonRoute1="/semi"
      amendmentButtonTitle1="Reference Doc"
    />
  );
};

export default SemiPage;
