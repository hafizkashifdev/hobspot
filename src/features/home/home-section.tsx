"use client";

import Link from "next/link";
import { colorLegends, fcalogo } from "@/assets";
import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        legendRef.current &&
        !legendRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      <Stack flexDirection={"row"} alignItems={"center"} mt={{ md: 2, xs: 1 }}>
        <img src={fcalogo.src} alt="FCA Logo" width={98} height={31} />

        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
          FCA Application Process
        </Typography>
      </Stack>

      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mt={{ md: 2, xs: 1 }}
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={{ xs: 2, sm: 2 }}
          sx={{ minWidth: 0, flexShrink: 1 }}
        >
          Sequence Diagram
        </Typography>

        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "1.8rem" }}
          fontWeight={600}
          textTransform="uppercase"
          ml={{ xs: 2, sm: 2 }}
          sx={{
            minWidth: 0,
            flexShrink: 1,
            textAlign: { xs: "right", sm: "left" },
          }}
        >
          Colour Legend{" "}
          <span ref={iconRef}>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "25px",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}
            />
          </span>
        </Typography>
      </Stack>

      <Box>
        <Box
          dangerouslySetInnerHTML={{
            __html: `
<svg style="width:100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7440 6020">
  <style>
    .image-mapper-shape {
      fill: rgba(0, 0, 0, 0);
    }
    g:hover .image-mapper-shape {
      stroke: white;
      stroke-width: 2px;
      opacity: 20%;
    }
  </style>
  <image xlink:href="Request Section hdn (2).png" style="width: 7440px;" />

  <!-- External FCA Links -->
  <a xlink:href="https://connect.fca.org.uk/portal/s/" target="_blank" xlink:title="Applicant Access FCA Connect Portal">
    <g><rect x="538.62" y="944.53" width="686.93" height="179.54" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://connect.fca.org.uk/firms/aupo_applicationselection" target="_blank" xlink:title="Start an application">
    <g><rect x="468.36" y="1225.55" width="569.84" height="101.47" class="image-mapper-shape" /></g>
  </a>

  <!-- Internal FCA Video Links -->
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Applicant-Accesses-FCA-Connect-Portal.mp4" target="_blank" xlink:title="Applicant Access FCA Connect Portal Audio">
    <g><rect x="1288.00" y="936.73" width="179.54" height="163.92" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Start-an-Application.mp4" target="_blank" xlink:title="Start an application Audio">
    <g><rect x="1194.33" y="1202.14" width="163.92" height="132.70" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Complete-the-application-with-contact-details-fee-payment-declaration-and-upload-required-documents.mp4" target="_blank" xlink:title="Complete the Application Audio">
    <g><rect x="1218.05" y="1952.47" width="125.38" height="134.34" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/pisp-api" target="_parent" xlink:title="Complete the Application">
    <g><rect x="366.88" y="1592.44" width="1085.04" height="288.82" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/pisp_spi" target="_parent" xlink:title="SPI">
    <g><rect x="850.86" y="1896.88" width="187.34" height="70.25" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/raisp" target="_parent" xlink:title="RAISP">
    <g><rect x="819.64" y="1998.36" width="234.18" height="54.64" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/fca-application-e-money-new-authorisation-registration-aemi" target="_parent" xlink:title="AEMI">
    <g><rect x="835.25" y="2084.23" width="195.15" height="70.25" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/semi" target="_parent" xlink:title="SEMI">
    <g><rect x="850.86" y="2193.51" width="171.73" height="78.06" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/fca-application" target="_parent" xlink:title="FCA Application Process">
    <g><rect x="6401.00" y="335.66" width="960.15" height="171.73" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="/payment-services-and-electronic-money-our-approach" target="_parent" xlink:title="Payment Services & E-Money">
    <g><rect x="6393.20" y="530.81" width="944.53" height="132.70" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Check-for-completeness.mp4" target="_blank" xlink:title="Check the completeness">
    <g><rect x="2435.50" y="2443.31" width="140.50" height="124.89" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Completeness-Check-Result.mp4" target="_blank" xlink:title="Completeness Check Result">
    <g><rect x="3583.00" y="2724.33" width="140.50" height="124.89" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Request-further-information.mp4" target="_blank" xlink:title="Request Further Information">
    <g><rect x="1288.00" y="3122.44" width="132.70" height="117.09" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Provide-additional-data.mp4" target="_blank" xlink:title="Provide Additional Data">
    <g><rect x="1225.55" y="3348.81" width="140.50" height="117.09" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Revalidate-provided-data.mp4" target="_blank" xlink:title="Revalidate Provided Data">
    <g><rect x="2443.31" y="3450.29" width="101.47" height="132.70" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Fitness-and-Propriety-Assessment.mp4" target="_blank" xlink:title="Fitness & Properiert Assessment">
    <g><rect x="3684.48" y="4066.98" width="140.50" height="140.50" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Assessment-Result.mp4" target="_blank" xlink:title="Assessment Results">
    <g><rect x="3504.94" y="4379.22" width="148.31" height="124.89" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/Decision-Approve-Reject.mp4" target="_blank" xlink:title="Decision Approve & Reject">
    <g><rect x="1241.17" y="4566.57" width="179.54" height="124.89" class="image-mapper-shape" /></g>
  </a>
  <a xlink:href="https://orcalo.blob.core.windows.net/locofy/FCA/If-Approved-Register-firm-&-publish.mp4" target="_blank" xlink:title="If Approved Register firm & publish">
    <g><rect x="2458.92" y="4871.01" width="124.89" height="148.31" class="image-mapper-shape" /></g>
  </a>
</svg>


            `,
          }}
        />

        {isOpen && (
          <>
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.3)",
                zIndex: 1200,
              }}
              onClick={() => setIsOpen(false)}
            />
            <Box
              ref={legendRef}
              sx={{
                position: "absolute",
                top: "150px",
                right: "50px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: 3,
                p: 1,
                zIndex: 1300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={colorLegends.src}
                alt="Color Legend"
                width={40}
                height={40}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
