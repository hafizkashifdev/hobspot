import { CampaignsCalendarViewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsCalendarViewPage = () => {
  return (
    <CommonPage
      pageTitle={` Calendar View  `}
      src={CampaignsCalendarViewImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsCalendarViewPage;
