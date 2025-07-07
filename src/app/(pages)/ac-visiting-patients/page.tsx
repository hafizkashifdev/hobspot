import { AcAcVisitingpatientsImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AcVisitingpatientsPage = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={AcAcVisitingpatientsImg}
      backRoute="/visiting-patients"
    />
  );
};

export default AcVisitingpatientsPage;
