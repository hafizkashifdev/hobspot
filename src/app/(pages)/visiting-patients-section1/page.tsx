import { VisitingPatientsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const VisitingPatientsPage = () => {
  return (
    <CommonPage
      pageTitle="Visiting patients"
      src={VisitingPatientsImage}
      backRoute="/ac-visiting-patients"
    />
  );
};

export default VisitingPatientsPage;
