'use client'
import {
  MarketingImage1,
  MarketingImage2,
  MarketingImage3,
  MarketingImage4,
  MarketingImage5,
  MarketingImage6,
  MarketingImage7,
  MarketingImage8,
  MarketingImage9,
  MarketingImage10
} from "@/assets";
import FaGlobalScreen from "@/components/fa-global-screen";

const cardsData = [
  { key: '1', title: 'Campaigns', href: '/campaigns', icon: MarketingImage1 },
  { key: '2', title: 'Email', href: '/emails', icon: MarketingImage2 },
  { key: '3', title: 'Social', href: '/social', icon: MarketingImage3 },
  { key: '4', title: 'Ads', href: '/ads', icon: MarketingImage4 },
  { key: '5', title: 'Events', href: '/events', icon: MarketingImage5 },
  { key: '6', title: 'Forms', href: '/forms', icon: MarketingImage6 },
  { key: '7', title: 'CTAs', href: '/ctas', icon: MarketingImage7 },
  { key: '8', title: 'SMS', href: '/sms', icon: MarketingImage8 },
  { key: '9', title: 'Buyer Intent', href: '/buyer-intent', icon: MarketingImage9 },
  { key: '10', title: 'Lead Scoring', href: '/lead-scoring', icon: MarketingImage10 },
]

export default function HubspotWorkspacePage() {
  return (
    <FaGlobalScreen
      pageTitle="Marketing"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
