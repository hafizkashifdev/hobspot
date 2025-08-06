"use client";

import React from "react";
import { DataManagementDataQualityImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";

const areas = [
  { alt: "Data Quality", title: "Data Quality", href: "data-quality", coords: "4,4,283,69", shape: "rect" },
  { alt: "Data Monitoring", title: "Data Monitoring", href: "data-management-data-quality-data-monitoring", coords: "31,116,357,177", shape: "rect" },
  { alt: "Records", title: "Records", href: "data-management-data-quality-records", coords: "32,412,227,477", shape: "rect" },
  { alt: "Data Sync", title: "Data Sync", href: "data-management-data-quality-data-sync", coords: "1102,420,1346,469,1346,472,1346,469", shape: "rect" },
  { alt: "Properties", title: "Properties", href: "data-management-data-quality-properties", coords: "30,738,270,791", shape: "rect" },
  { alt: "Line Graph", title: "Line Graph", href: "data-management-data-quality-properties-line-graph", coords: "58,819,306,876", shape: "rect" },
  { alt: "Grid", title: "Grid", href: "data-management-data-quality-properties-grid", coords: "1128,820,1289,868", shape: "rect" },
  { alt: "Workflows", title: "Workflows", href: "data-management-data-quality-workflows", coords: "40,1158,268,1216", shape: "rect" },
  { alt: "Property Insights", title: "Property Insights", href: "data-management-data-quality-property-insights", coords: "12,1527,349,1590", shape: "rect" },
  { alt: "Overview", title: "Overview", href: "data-management-data-quality-property-insights-overview", coords: "25,1636,271,1696", shape: "rect" },
  { alt: "Properties to review", title: "Properties to review", href: "data-management-data-quality-property-insights-properties-to-review", coords: "48,1942,422,2003", shape: "rect" },
  { alt: "Contacts", title: "Contacts", href: "data-management-data-quality-property-insights-properties-to-review-contacts", coords: "55,2036,290,2089", shape: "rect" },
  { alt: "Companies", title: "Companies", href: "data-management-data-quality-property-insights-properties-to-review-companies", coords: "50,2320,340,2381", shape: "rect" },
  { alt: "Deals", title: "Deals", href: "data-management-data-quality-property-insights-properties-to-review-deals", coords: "30,2595,260,2663", shape: "rect" },
  { alt: "Tickets", title: "Tickets", href: "data-management-data-quality-property-insights-properties-to-review-tickets", coords: "55,2878,263,2943", shape: "rect" },
  { alt: "Property Detail", title: "Property Detail", href: "data-management-data-quality-property-insights-properties-to-review-property-detail", coords: "55,3161,380,3232", shape: "rect" },
  { alt: "Data Sync Insights", title: "Data Sync Insights", href: "data-management-data-quality-data-sync-insights", coords: "14,3706,308,3769", shape: "rect" },
  { alt: "Data Management Data Quality Data Sync Insights Overview", title: "Data Management Data Quality Data Sync Insights Overview", href: "data-management-data-quality-data-sync-insights-overview", coords: "40,3788,265,3865", shape: "rect" },
  { alt: "Data Monitoring", title: "Data Monitoring", href: "data-management-data-quality-data-monitoring", coords: "16,4115,329,4169", shape: "rect" },
  { alt: "Duplicate record issues", title: "Duplicate record issues", href: "data-management-data-quality-data-monitoring-duplicate-record-issues", coords: "29,4207,450,4264", shape: "rect" },
  { alt: "Overview", title: "Overview", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-overview", coords: "57,4300,298,4353", shape: "rect" },
  { alt: "Adjust Settings for Duplicate", title: "Adjust Settings for Duplicate", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-adjust-settings-for-duplicate", coords: "52,4571,562,4631", shape: "rect" },
  { alt: "Monitor duplicate settings", title: "Monitor duplicate settings", href: "data-management-data-quality-data-monitoring-for-duplicate-monitor-duplicate-settings", coords: "70,4672,557,4732", shape: "rect" },
  { alt: "Notifications", title: "Notifications", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-adjust-settings-for-duplicate-notifications", coords: "760,4669,1065,4738", shape: "rect" },
  { alt: "Property anomalies", title: "Property anomalies", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-property-anomalies", coords: "32,5058,413,5104", shape: "rect" },
  { alt: "Manage monitored properties", title: "Manage monitored properties", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-property-anomalies-manage-monitored-properties", coords: "53,5132,595,5191", shape: "rect" },
  { alt: "Monitor new property", title: "Monitor new property", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-property-anomalies-monitor-new-property", coords: "53,5432,475,5501", shape: "rect" },
  { alt: "Anomaly settings", title: "Anomaly settings", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-property-anomalies-monitor-new-property-settings", coords: "75,5537,444,5600", shape: "rect" },
  { alt: "Notifications", title: "Notifications", href: "data-management-data-quality-data-monitoring-duplicate-record-issues-property-anomalies-monitor-new-property-notifications", coords: "770,5532,1069,5595", shape: "rect" },
  { alt: "Formatting Issues", title: "Formatting Issues", href: "data-management-data-quality-formatting-issues", coords: "21,5916,354,5985", shape: "rect" },
  { alt: "Contacts", title: "Contacts", href: "data-management-data-quality-formatting-issues-contacts", coords: "32,6008,270,6085", shape: "rect" },
  { alt: "Name", title: "Name", href: "data-management-data-quality-formatting-issues-contacts-name", coords: "58,6104,276,6171", shape: "rect" },
  { alt: "Actions", title: "Actions", href: "data-management-data-quality-formatting-issues-contacts-actions", coords: "1106,6120,1330,6183", shape: "rect" },
  { alt: "Email", title: "Email", href: "data-management-data-quality-formatting-issues-email", coords: "60,6405,232,6467", shape: "rect" },
  { alt: "Actions", title: "Actions", href: "data-management-data-quality-formatting-issues-contacts-actions", coords: "1102,6426,1328,6484", shape: "rect" },
  { alt: "Location", title: "Location", href: "data-management-data-quality-formatting-issues-location", coords: "57,6712,286,6779", shape: "rect" },
  { alt: "Actions", title: "Actions", href: "data-management-data-quality-formatting-issues-location-actions", coords: "1108,6730,1326,6800", shape: "rect" },
  { alt: "Actions", title: "Actions", href: "data-management-data-quality-formatting-issues-actions", coords: "34,7043,245,7106", shape: "rect" },
  { alt: "Automations", title: "Automations", href: "data-management-data-quality-formatting-issues-actions-automation", coords: "66,7124,339,7183", shape: "rect" },
  { alt: "Manage Issue Types", title: "Manage Issue Types", href: "data-management-data-quality-formatting-issues-actions-manage-issue-types", coords: "934,7128,1328,7186", shape: "rect" },
  { alt: "Manage Duplicates", title: "Manage Duplicates", href: "data-management-data-quality-manage-duplicates", coords: "7,7493,365,7545", shape: "rect" },
  { alt: "Contacts", title: "Contacts", href: "data-management-data-quality-manage-duplicates-contacts", coords: "39,7588,265,7647", shape: "rect" },
  { alt: "Companies", title: "Companies", href: "data-management-data-quality-manage-duplicates-companies", coords: "47,7877,299,7936", shape: "rect" },
];


const DataManagementDataQualityPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Data Quality`}
      image={DataManagementDataQualityImage}
      backRoute="/hubspot-data-management"
      areas={areas}
    />
  );
};

export default DataManagementDataQualityPage;
