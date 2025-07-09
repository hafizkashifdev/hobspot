"use client";

import { Part3RestrictionOrdersImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part3RestrictionOrdersPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VII / Part 3 Restriction orders`}
      src={Part3RestrictionOrdersImage}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="/restriction-order-part-iii-ac"
    />
  );
};

export default Part3RestrictionOrdersPage;
