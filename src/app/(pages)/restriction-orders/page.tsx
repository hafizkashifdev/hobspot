"use client";

import { RestrictionOrdersImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RestrictionOrdersPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Restriction orders`}
      src={RestrictionOrdersImage}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-3-amendment-comparison"
    />
  );
};

export default RestrictionOrdersPage;
