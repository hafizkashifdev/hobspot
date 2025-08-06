'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  CommerceImage1,
  CommerceImage2,
  CommerceImage3,
  CommerceImage4,
  CommerceImage5,
  CommerceImage6,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Payments', href: '/commerce-payment', icon: CommerceImage1 },
  { key: '2', title: 'Invoices', href: '/invoice-main', icon: CommerceImage2 },
  { key: '3', title: 'Payment Links', href: '/payment-links-main', icon: CommerceImage3 },
  { key: '4', title: 'Quotes', href: '/quotes-main', icon: CommerceImage4 },
  { key: '5', title: 'Products', href: '/products-main', icon: CommerceImage5 },
  { key: '6', title: 'Subscription', href: '/subscriptions-main', icon: CommerceImage6 }
]

export default function HubspotCommercePage() {
  return (
    <FaGlobalScreen
      pageTitle="Commerce"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
