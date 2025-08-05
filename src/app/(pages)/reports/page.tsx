"use client";
import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { ReportingImage } from "@/assets";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

// Styled components
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1848px",
  aspectRatio: "1848 / 7088",
  margin: "0 auto",
}));

const OverlayButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  border: "none",
  borderRadius: 0,
  minWidth: "unset",
  padding: 0,
}));

// Interface for clickable areas
interface ClickableArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Clickable areas data
const clickableAreas: ClickableArea[] = [
  {
    id: "1",
    href: "/reports-my-reports-1",
    title: "My Reports",
    x: 22.814814814814813,
    y: 50.894586894586894,
    width: 261.4928774928774,
    height: 75.46438746438749,
  },
  {
    id: "2",
    href: "/reports-tabs-2",
    title: "Reports Tabs",
    x: 303.6125356125356,
    y: 105.2991452991453,
    width: 219.37321937321934,
    height: 77.21937321937321,
  },
  {
    id: "3",
    href: "/reports-filters-3",
    title: "Reports Filters",
    x: 930.1424501424502,
    y: 101.7891737891738,
    width: 263.24786324786317,
    height: 82.4843304843305,
  },
  {
    id: "4",
    href: "/reports-report-grid-4",
    title: "Report Grid",
    x: 49.13960113960114,
    y: 363.28205128205127,
    width: 322.9173789173789,
    height: 75.46438746438747,
  },
  {
    id: "5",
    href: "/reports-report-actions-5",
    title: "Report Actions",
    x: 73.7094017094017,
    y: 575.6353276353276,
    width: 359.7720797720798,
    height: 70.19943019943025,
  },
  {
    id: "6",
    href: "/reports-report-view-6",
    title: "Report View",
    x: 64.93447293447294,
    y: 837.1282051282051,
    width: 321.1623931623932,
    height: 78.974358974359,
  },
  {
    id: "7",
    href: "/reports-create-report-7",
    title: "Create Report",
    x: 29.834757834757834,
    y: 1177.5954415954416,
    width: 363.28205128205127,
    height: 82.48433048433048,
  },
  {
    id: "8",
    href: "/reports-create-report-from-scratch-8",
    title: "Create Report from Scratch",
    x: 56.15954415954416,
    y: 1282.8945868945868,
    width: 512.4558404558405,
    height: 94.76923076923072,
  },
  {
    id: "9",
    href: "/reports-single-object-9",
    title: "Single Object Report",
    x: 71.95441595441595,
    y: 1388.193732193732,
    width: 336.95726495726495,
    height: 78.97435897435912,
  },
  {
    id: "10",
    href: "/reports-ai-report-generator-10",
    title: "AI Report Generator",
    x: 910.8376068376068,
    y: 1414.5185185185185,
    width: 436.991452991453,
    height: 78.97435897435912,
  },
  {
    id: "11",
    href: "/reports-custom-report-builder-11",
    title: "Custom Report Builder",
    x: 73.7094017094017,
    y: 1681.2763532763533,
    width: 501.92592592592587,
    height: 80.72934472934458,
  },
  {
    id: "12",
    href: "/reports-choose-my-own-data-sources-12",
    title: "Choose My Own Data Sources",
    x: 84.23931623931624,
    y: 1770.7806267806268,
    width: 565.105413105413,
    height: 75.46438746438753,
  },
  {
    id: "13",
    href: "/reports-start-with-a-dataset-13",
    title: "Start with a Dataset",
    x: 84.23931623931624,
    y: 2021.7435897435898,
    width: 461.5612535612535,
    height: 91.25925925925912,
  },
  {
    id: "14",
    href: "/reports-ai-report-generator-14",
    title: "AI Report Generator",
    x: 103.54415954415947,
    y: 2272.7065527065524,
    width: 487.88603988603984,
    height: 84.2393162393164,
  },
  {
    id: "15",
    href: "/reports-configure-15",
    title: "Configure Report",
    x: 705.5042735042736,
    y: 2283.2364672364674,
    width: 454.5413105413105,
    height: 75.46438746438707,
  },
  {
    id: "16",
    href: "/reports-attribution-16",
    title: "Attribution Reports",
    x: 66.6894586894587,
    y: 2744.797720797721,
    width: 435.2364672364672,
    height: 77.21937321937321,
  },
  {
    id: "17",
    href: "/reports-contact-create-attribution-17",
    title: "Contact Create Attribution",
    x: 85.99430199430203,
    y: 2834.301994301994,
    width: 528.2507122507122,
    height: 84.2393162393164,
  },
  {
    id: "18",
    href: "/reports-configure-18",
    title: "Configure Report",
    x: 100.03418803418803,
    y: 2925.5612535612536,
    width: 438.74643874643874,
    height: 82.48433048433026,
  },
  {
    id: "19",
    href: "/reports-filters-19",
    title: "Report Filters",
    x: 101.78917378917379,
    y: 3153.709401709402,
    width: 375.56695156695156,
    height: 91.25925925925912,
  },
  {
    id: "20",
    href: "/reports-funnels-20",
    title: "Funnel Reports",
    x: 80.7293447293448,
    y: 3631.0655270655266,
    width: 429.9715099715101,
    height: 80.72934472934503,
  },
  {
    id: "21",
    href: "/reports-data-source-contacts-deals-companies-leads-21",
    title: "Data Source: Contacts, Deals, Companies, Leads",
    x: 87.74928774928775,
    y: 3720.5698005698005,
    width: 889.7777777777777,
    height: 82.48433048433071,
  },
  {
    id: "22",
    href: "/reports-timeline-22",
    title: "Timeline Reports",
    x: 93.01424501424503,
    y: 3806.5641025641025,
    width: 466.82621082621085,
    height: 75.46438746438753,
  },
  {
    id: "23",
    href: "/reports-funnel-type-24",
    title: "Funnel Type",
    x: 108.80911680911684,
    y: 4055.77207977208,
    width: 389.6068376068376,
    height: 85.99430199430162,
  },
  {
    id: "24",
    href: "/reports-funnel-type-24",
    title: "Funnel Type",
    x: 54.40455840455841,
    y: 4355.874643874644,
    width: 544.0455840455841,
    height: 87.74928774928776,
  },
  {
    id: "25",
    href: "/reports-choose-my-own-data-sources-25",
    title: "Choose My Own Data Sources",
    x: 73.7094017094017,
    y: 4448.888888888889,
    width: 552.8205128205128,
    height: 73.7094017094023,
  },
  {
    id: "26",
    href: "/reports-customize-26",
    title: "Customize Report",
    x: 87.74928774928777,
    y: 4682.3019943019945,
    width: 412.4216524216524,
    height: 73.70940170940139,
  },
  {
    id: "27",
    href: "/reports-analytics-suite-27",
    title: "Analytics Suite",
    x: 57.914529914529915,
    y: 5006.974358974359,
    width: 384.34188034188037,
    height: 87.74928774928776,
  },
  {
    id: "28",
    href: "/reports-marketing-analytics-suite-28",
    title: "Marketing Analytics Suite",
    x: 78.97435897435894,
    y: 5099.988603988604,
    width: 465.0712250712249,
    height: 71.95441595441571,
  },
  {
    id: "29",
    href: "/reports-sales-analytics-suite-30",
    title: "Sales Analytics Suite",
    x: 71.95441595441595,
    y: 5584.3646723646725,
    width: 493.1509971509971,
    height: 78.97435897435844,
  },
  {
    id: "30",
    href: "/reports-ready-made-reports-29",
    title: "Ready Made Reports",
    x: 89.50427350427356,
    y: 5842.347578347579,
    width: 512.4558404558404,
    height: 94.76923076923049,
  },
  {
    id: "31",
    href: "/reports-service-analytics-suite-31",
    title: "Service Analytics Suite",
    x: 57.91452991452992,
    y: 6493.447293447293,
    width: 521.2307692307694,
    height: 93.0142450142448,
  },
  {
    id: "32",
    href: "/reports-ready-made-reports-32",
    title: "Ready Made Reports",
    x: 94.7692307692307,
    y: 6747.920227920227,
    width: 507.19088319088314,
    height: 98.27920227920276,
  },
  {
    id: "33",
    href: "/reports-choose-an-event-23",
    title: "Choose an Event",
    x: 594.9401709401709,
    y: 3808.319088319088,
    width: 408.91168091168095,
    height: 77.21937321937321,
  },
  {
    id: "34",
    href: "/reports-ready-made-reports-29",
    title: "Ready Made Reports",
    x: 284.3076923076923,
    y: 5182.472934472935,
    width: 468.5811965811966,
    height: 71.95441595441571,
  },
];

interface ReportsImageMapProps {
  imageSrc: string;
  imageAlt?: string;
}

const ReportsImageMap: React.FC<ReportsImageMapProps> = () => {
  const router = useRouter();

  const handleAreaClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box p={3}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"Back Icon"}
          width={40}
          height={40}
          onClick={() => router.push("/hubspot-reporting")}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
          Reports
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>
      <ImageContainer>
        {/* Main Image */}
        <Image
          src={ReportingImage}
          alt="Reporting Image"
          fill
          style={{ objectFit: "contain" }}
          priority
        />

        {/* Clickable Areas */}
        {clickableAreas.map((area) => (
          <OverlayButton
           key={area.id}
            onClick={() => handleAreaClick(area.href)}
            style={{
              left: `${(area.x / 1848) * 100}%`,
              top: `${(area.y / 7088) * 100}%`,
              width: `${(area.width / 1848) * 100}%`,
              height: `${(area.height / 7088) * 100}%`,
              cursor: "pointer",
            }}
            aria-label={area.title}
          />
        ))}
      </ImageContainer>
    </Box>
  );
};

export default ReportsImageMap;
