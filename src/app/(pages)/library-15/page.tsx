import { Library15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library15Page = () => {
  return (
    <CommonPage
      pageTitle={`Grid View`}
      src={Library15Image}
      backRoute="/library"
    />
  );
};

export default Library15Page;
