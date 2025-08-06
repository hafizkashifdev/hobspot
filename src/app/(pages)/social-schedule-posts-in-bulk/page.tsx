import { SocialSchedulePostsInBulkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialSchedulePostsInBulkPage = () => {
  return (
    <CommonPage
      pageTitle={`Schedule Posts in Bulk`}
      src={SocialSchedulePostsInBulkImage}
      backRoute="/social"
    />
  );
};

export default SocialSchedulePostsInBulkPage;
