"use client";

import { ScheduleAct1983Schedule4Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ScheduleAct1983Schedule4Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE Schedule Act 1983 Schedule 4`}
      src={ScheduleAct1983Schedule4Image}
      backRoute="/schedule-act-1983-schedule-4"
     amendmentButtonRoute="/schedule-act-1983-schedule-4-amendment-comparison"
    />
  );
};

export default ScheduleAct1983Schedule4Page;
