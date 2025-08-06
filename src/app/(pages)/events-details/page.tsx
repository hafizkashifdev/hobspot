import { EventsDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EventsDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Events Details`}
      src={EventsDetailsImage}
      backRoute="/events"
    />
  );
};

export default EventsDetailsPage;
