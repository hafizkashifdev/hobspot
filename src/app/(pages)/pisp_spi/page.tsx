import React from "react";
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";
import { pispSpiImage, pispSpiImage1, pispSpiImage10, pispSpiImage2, pispSpiImage3, pispSpiImage4, pispSpiImage5, pispSpiImage6, pispSpiImage7, pispSpiImage8, pispSpiImage9 } from "@/assets";

const PispSpiPage = () => {
    return (
        <MultiImagesAmendmentComparisonBtn
            images={[
                { src: pispSpiImage, route: "/pisp_spi", alt: "Image" },
                { src: pispSpiImage1, route: "/identification-details-and-timings", alt: "Image 1" },
                { src: pispSpiImage2, route: "/conditions-of-registration", alt: "Image 2" },
                { src: pispSpiImage3, route: "/programme-of-operations", alt: "Image 3" },
                { src: pispSpiImage4, route: "/safeguarding", alt: "Image 4" },
                { src: pispSpiImage5, route: "/procedure-for-security-incident-and-customer-complaints", alt: "Image 5" },
                { src: pispSpiImage6, route: "/process-for-sensitive-payment-data", alt: "Image 6" },
                { src: pispSpiImage7, route: "/collection-of-statistical-data-performance-transactions-fraud", alt: "Image 7" },
                { src: pispSpiImage8, route: "/security-policy", alt: "Image 8" },
                { src: pispSpiImage9, route: "/psd-agents", alt: "Image 9" },
                { src: pispSpiImage10, route: "/fees-and-levies", alt: "Image 10" },
            ]}
            pageTitle="FCA Application / Payment Services New Authorisation & Registration / SPI"
            amendmentButtonRoute2="/spi-final-terms-in-application-pack"
            amendmentButtonTitle1="Reference Doc"
            amendmentButtonTitle2="KEY TERMS"
           backRoute="/payment-service-new-authorisation-registration"
  downloadUrl="https://www.fca.org.uk/publication/forms/psd-spi-registration-application-form.doc"
//   downloadFileName="psd-spi-registration-application-form.doc"
        />
    );
};

export default PispSpiPage;
