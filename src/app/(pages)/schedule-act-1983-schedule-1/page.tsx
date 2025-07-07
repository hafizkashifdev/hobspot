"use client";

import { ScheduleAct1983Schedule1Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ScheduleAct1983Schedule1Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE Schedule Act 1983 Schedule 1`}
      src={ScheduleAct1983Schedule1Image}
      backRoute="/schedule-act-1983-schedule-1"
      amendmentButtonRoute="/schedule-act-1983-schedule-1-amendment-comparison"
    />
  );
};

export default ScheduleAct1983Schedule1Page;
