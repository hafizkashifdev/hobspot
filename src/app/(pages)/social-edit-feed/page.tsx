import { SocialEditFeedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialEditFeedPage = () => {
  return (
    <CommonPage
      pageTitle={`Edit Feed`}
      src={SocialEditFeedImage}
      backRoute="/social"
    />
  );
};

export default SocialEditFeedPage;
