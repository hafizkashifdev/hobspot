"use client";
import { FcaOverviewImage } from "@/assets";
import MultiImagesNoBtn from "@/components/multi-images-no-btn";

const ElectronicsPage = () => {
  const handleCheckboxChange = (selectedValue: string, page: string) => {
    console.log(`Selected: ${selectedValue} on page: ${page}`);
  };

  const imagesData = [
    { src: FcaOverviewImage, alt: "Modern TV", route: "/products/electronics/tv-details" },
    { src: FcaOverviewImage, alt: "High-performance Laptop", route: "/products/electronics/laptop-details" },
    { src: FcaOverviewImage, alt: "Smartphone", route: "/products/electronics/phone-details" },
    { src: FcaOverviewImage, alt: "Smartphone 2", route: "/products/electronics/phone-details" },
    { src: FcaOverviewImage, alt: "Modern TV 2" },
  ];

  return (
    <MultiImagesNoBtn
      backRoute="/products"
      pageTitle="Electronics Products"
      images={imagesData}
      onChange={handleCheckboxChange}
    />
  );
};

export default ElectronicsPage;