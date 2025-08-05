import { Library20Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library20Page = () => {
  return (
    <CommonPage
      pageTitle={`Stock Images`}
      src={Library20Image}
      backRoute="/library"
    />
  );
};

export default Library20Page;
