import { ReturnOfPatientsAbsentWithoutLeaveAcImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReturnOfPatientsAbsentWithoutLeaveAcPage = () => {
  return (
    <CommonPage
      pageTitle="Amendment Comparison"
      src={ReturnOfPatientsAbsentWithoutLeaveAcImage}
      backRoute="/return-of-patients-absent-without-leave"
    />
  );
};

export default ReturnOfPatientsAbsentWithoutLeaveAcPage;
