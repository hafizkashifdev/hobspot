import { DataManagementDatasetsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
{ alt: "", title: "", href: "data-management-datasets-all-datasets", coords: "25,36,291,96", shape: "rect" },
  { alt: "Data Sets Details", title: "Data Sets Details", href: "data-management-datasets-all-datasets-data-sets-details", coords: "53,131,391,193", shape: "rect" },
  { alt: "View Dataset", title: "View Dataset", href: "data-management-datasets-all-datasets-data-sets-details-view-dataset", coords: "74,394,380,459", shape: "rect" },
  { alt: "Fields", title: "Fields", href: "data-management-datasets-all-datasets-data-sets-details-view-dataset-fields", coords: "87,475,314,536", shape: "rect" },
  { alt: "Formula Fields", title: "Formula Fields", href: "data-management-datasets-all-datasets-data-sets-details-view-dataset-fields-formula-fields", coords: "113,573,433,634", shape: "rect" },
  { alt: "Property fields", title: "Property fields", href: "data-management-datasets-all-datasets-data-sets-details-view-dataset-fields-property-fields", coords: "864,565,1191,627", shape: "rect" },
  { alt: "Preview", title: "Preview", href: "data-management-datasets-all-datasets-data-sets-details-view-dataset-fields-preview", coords: "89,900,316,967", shape: "rect" },
  { alt: "Report", title: "Report", href: "data-management-datasets-all-datasets-data-sets-details-view-dataset-fields-reports", coords: "86,1213,298,1283", shape: "rect" },
  { alt: "Create Data set", title: "Create Data set", href: "data-management-datasets-create-dataset", coords: "35,1604,350,1666", shape: "rect" },
  { alt: "HubSpot data sources", title: "HubSpot data sources", href: "data-management-datasets-create-dataset-hubspot-data-sources", coords: "406,1698,802,1752", shape: "rect" },
  { alt: "Upload CSV", title: "Upload CSV", href: "data-management-datasets-create-dataset-upload-csv", coords: "417,2023,654,2084", shape: "rect" },
  { alt: "Add Fields", title: "Add Fields", href: "data-management-datasets-create-dataset-upload-csv-preview-add-fields", coords: "79,2342,321,2412", shape: "rect" },
  { alt: "Preview", title: "Preview", href: "data-management-datasets-create-dataset-upload-csv-preview", coords: "881,2348,1091,2410", shape: "rect" },
  { alt: "Save Dataset", title: "Save Dataset", href: "data-management-datasets-create-dataset-upload-csv-preview-add-fields-save-dataset", coords: "81,2704,366,2768", shape: "rect" },
];

const DataManagementDatasetsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Datasets`}
      image={DataManagementDatasetsImage}
      backRoute="/hubspot-data-management"
      areas={areas}
    />
  );
};

export default DataManagementDatasetsPage;
