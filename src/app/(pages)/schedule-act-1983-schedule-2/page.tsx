"use client";

import { ScheduleAct1983Schedule2Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ScheduleAct1983Schedule2Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE Schedule Act 1983 Schedule 2`}
      src={ScheduleAct1983Schedule2Image}
     backRoute="/schedule-act-1983-schedule-2"
    amendmentButtonRoute="/schedule-act-1983-schedule-2-amendment-comparison"
    />
  );
};

export default ScheduleAct1983Schedule2Page;
