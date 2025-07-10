import { CollectionOfStatisticalDataPerformanceTransactionsFraudImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CollectionOfStatisticalDataPerformanceTransactionsFraudPage = () => {
  return (
    <CommonPage
      pageTitle={`Collection of statistical data (performance, transactions, fraud)`}
      src={CollectionOfStatisticalDataPerformanceTransactionsFraudImage}
      backRoute="/pisp_spi"
    />
  );
};

export default CollectionOfStatisticalDataPerformanceTransactionsFraudPage;
