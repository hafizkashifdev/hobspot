'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  DataManagementImage1,
  DataManagementImage2,
  DataManagementImage3,
  DataManagementImage6,
  DataManagementImage5,
  DataManagementImage4,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Integrations', href: '/data-management-integrations', icon: DataManagementImage1 },
  { key: '2', title: 'Custom Events', href: '/data-management-custom-events', icon: DataManagementImage2 },
  { key: '3', title: 'Data Quality', href: '/data-management-data-quality', icon: DataManagementImage3 },
  { key: '4', title: 'Datasets', href: '/data-management-datasets', icon: DataManagementImage4 },
  { key: '5', title: 'Data Model', href: '/data-management-data-model', icon: DataManagementImage5 },
  { key: '6', title: 'Data Enrichment', href: '/data-management-data-enrichment', icon: DataManagementImage6 },
]

export default function HubspotCommercePage() {
  return (
    <FaGlobalScreen
      pageTitle="Data Management"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 4 }}
      backRoute="/"
    />
  );
}
