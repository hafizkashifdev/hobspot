"use client";

import { ScheduleAct1983Schedule6Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ScheduleAct1983Schedule6Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE Schedule Act 1983 Schedule 6`}
      src={ScheduleAct1983Schedule6Image}
       backRoute="/schedule-act-1983-schedule-6"
     amendmentButtonRoute="/schedule-act-1983-schedule-6-amendment-comparison"
    />
  );
};

export default ScheduleAct1983Schedule6Page;
