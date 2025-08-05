import { DataManagementDataQualityPropertyInsightsPropertiesToReviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityPropertyInsightsPropertiesToReviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Properties to review`}
      src={DataManagementDataQualityPropertyInsightsPropertiesToReviewImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityPropertyInsightsPropertiesToReviewPage;
