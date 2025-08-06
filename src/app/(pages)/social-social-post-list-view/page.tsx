import { SocialSocialPostListViewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialSocialPostListViewPage = () => {
  return (
    <CommonPage
      pageTitle={` Social Post List View`}
      src={SocialSocialPostListViewImage}
      backRoute="/social"
    />
  );
};

export default SocialSocialPostListViewPage;
