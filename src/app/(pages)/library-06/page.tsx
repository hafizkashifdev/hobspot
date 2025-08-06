import { Library06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library06Page = () => {
  return (
    <CommonPage
      pageTitle={`Snippets`}
      src={Library06Image}
      backRoute="/library"
    />
  );
};

export default Library06Page;
