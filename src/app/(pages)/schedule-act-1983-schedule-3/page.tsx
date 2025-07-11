"use client";

import { ScheduleAct1983Schedule3Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ScheduleAct1983Schedule3Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE / Schedule 3`}
      src={ScheduleAct1983Schedule3Image}
     backRoute="/schedule-act-1983"
     amendmentButtonRoute="/schedule-act-1983-schedule-3-amendment-comparison"
    />
  );
};

export default ScheduleAct1983Schedule3Page;
