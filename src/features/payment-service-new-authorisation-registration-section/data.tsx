import { pispApi, pispSmallPaymentInstitutionSpi, registrationAccountInformationServiceProvideRaisp } from "@/assets";

export const paymentServiceData = [
    {
        key: "0",
        link: "/pisp-api",
        title: "PISP_API",
        icon: pispApi,
    },
    {
        key: "1",
        link: "/pisp_spi",
        title: "PISP_Small Payment Institution (SPI)",
        icon: pispSmallPaymentInstitutionSpi,
    },
    {
        key: "2",
        link: "/raisp-registration-account-information-service-provider",
        title: "Registration as an Account Information Service Provider (RAISP)",
        icon: registrationAccountInformationServiceProvideRaisp,
    },
]