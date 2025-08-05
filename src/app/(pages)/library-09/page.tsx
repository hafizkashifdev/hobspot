import { Library09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library09Page = () => {
  return (
    <CommonPage
      pageTitle={`Recorded Calls`}
      src={Library09Image}
      backRoute="/library"
    />
  );
};

export default Library09Page;
