'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  ReportingImage1,
  ReportingImage2,
  ReportingImage3,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Dashboards', href: '/dashboards', icon: ReportingImage1 },
  { key: '2', title: 'Reports', href: '/reports', icon: ReportingImage2 },
  { key: '3', title: 'Forecast & Goals', href: '/forecast-and-goals', icon: ReportingImage3 },
]

export default function HubspotCommercePage() {
  return (
    <FaGlobalScreen
      pageTitle="Reporting"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 4 }}
      backRoute="/"
    />
  );
}
