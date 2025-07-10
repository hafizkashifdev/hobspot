import { raispSpiImage, raispSpiImage1, raispSpiImage10, raispSpiImage11, raispSpiImage12, raispSpiImage2, raispSpiImage3, raispSpiImage4, raispSpiImage5, raispSpiImage6, raispSpiImage7, raispSpiImage8, raispSpiImage9 } from '@/assets'
import MultiImagesAmendmentComparisonBtn from '@/components/common-page-multi-images-two-amendment-btn'
import React from 'react'

const RaispRegistrationAccountInformationServiceProvider = () => {
    return (
        <MultiImagesAmendmentComparisonBtn
            images={[
                { src: raispSpiImage, route: "/raisp-registration-account-information-service-provider", alt: "Image" },
                { src: raispSpiImage1, route: "/section-1-identification-details-and-timings", alt: "Image 1" },
                { src: raispSpiImage2, route: "/section-2-programme-of-operations", alt: "Image 2" },
                { src: raispSpiImage3, route: "/section-3-business-plan", alt: "Image 3" },
                { src: raispSpiImage4, route: "/section-4-structural-organisation", alt: "Image 4" },
                { src: raispSpiImage5, route: "/section-5-governance-arrangements-and-internal-control-mechanisms", alt: "Image 5" },
                { src: raispSpiImage6, route: "/section-6-procedure-to-monitor-handle-and-follow-up-on-security-incidents-and-complaints", alt: "Image 6" },
                { src: raispSpiImage7, route: "/section-7-process-in-place-to-file-monitor-track-and-restrict-access-to-sensitive-payment-data", alt: "Image 7" },
                { src: raispSpiImage8, route: "/section-8-business-continuity-arrangements", alt: "Image 8" },
                { src: raispSpiImage9, route: "/section-9-security-policy-document", alt: "Image 9" },
                { src: raispSpiImage10, route: "/section-10-identity-and-suitability-assessment-of-directors-and-persons-responsible-for-management", alt: "Image 10" },
                { src: raispSpiImage11, route: "/section-11-professional-indemnity-insurance-requirements", alt: "Image 11" },
                { src: raispSpiImage12, route: "/section-12-fees-and-levies", alt: "Image 12" },
            ]}
            pageTitle="FCA Application / Payment Services New Authorisation & Registration / RAISP"
            amendmentButtonRoute1="https://orcalo-my.sharepoint.com/:w:/g/personal/danish_qamar_consultancyoutfit_co_uk/EekE_twl9D1FsuxD_3DSaJsBZs26-w0aPPwa8CtmEEBmLw?e=3IUlHp"
            amendmentButtonRoute2="/terms-in-application-pack"
            amendmentButtonTitle1="Reference Doc"
            amendmentButtonTitle2="KEY TERMS"
            backRoute='/'
        />
    )
}

export default RaispRegistrationAccountInformationServiceProvider