import { Library04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library04Page = () => {
  return (
    <CommonPage
      pageTitle={`Grid View`}
      src={Library04Image}
      backRoute="/library"
    />
  );
};

export default Library04Page;
