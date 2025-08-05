import { DataQualityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataQualityPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Quality`}
      src={DataQualityImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataQualityPage;
