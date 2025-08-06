import { EventsCreateMarketingEventsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EventsCreateMarketingEventsPage = () => {
  return (
    <CommonPage
      pageTitle={`Marketing Events`}
      src={EventsCreateMarketingEventsImage}
      backRoute="/events"
    />
  );
};

export default EventsCreateMarketingEventsPage;
