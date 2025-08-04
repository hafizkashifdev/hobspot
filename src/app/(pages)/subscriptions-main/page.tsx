"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { subscriptionsImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

interface SubscriptionsPageProps {
    backRoute?: string;
}

const SubscriptionsPage: React.FC<SubscriptionsPageProps> = ({
    backRoute = "/hubspot-commerce"
}) => {
    const router = useRouter();
    const areas = [
        {
            id: 1,
            x: 14.02,
            y: 78.85,
            width: 420.51,
            height: 101.62,
            href: "/creating-a-subscription",
            title: "Subscription Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 8.76,
            y: 413.50,
            width: 487.09,
            height: 117.39,
            href: "/choose-collection-method",
            title: "Subscription Creation",
            target: "_self"
        },
        {
            id: 3,
            x: 22.78,
            y: 539.66,
            width: 753.42,
            height: 78.85,
            href: "/use-a-payment-link-to-charge-automatically",
            title: "Subscription Management",
            target: "_self"
        },
        {
            id: 4,
            x: 925.13,
            y: 492.35,
            width: 842.78,
            height: 119.15,
            href: "/automatically-send-recurring-invoices-to-customers",
            title: "Subscription Billing",
            target: "_self"
        },
        {
            id: 5,
            x: 26.28,
            y: 883.08,
            width: 537.91,
            height: 105.13,
            href: "/customer-payment-activation",
            title: "Subscription Renewals",
            target: "_self"
        },
        {
            id: 6,
            x: 15.77,
            y: 1231.75,
            width: 667.56,
            height: 119.15,
            href: "/subscription-management-automation",
            title: "Subscription Analytics",
            target: "_self"
        },
    ];

    const onBackIconClick = useCallback(() => {
        router.push(backRoute);
    }, [router, backRoute]);

    return (
        <Box sx={{ p: '40px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    src={CommonBackIcon}
                    alt="Back to HubSpot Commerce"
                    width={48}
                    height={48}
                    onClick={onBackIconClick}
                    style={{ cursor: "pointer" }}
                    priority
                />
                <Typography
                    variant="h5"
                    color="#5A5867"
                    fontSize={{ xs: "20px", sm: "26px", md: "32px" }}
                    fontWeight={{ md: 600, xs: 500 }}
                    sx={{ fontFamily: "inherit", lineHeight: '1.25', ml: 2 }}
                >
                    Subscriptions
                </Typography>
            </Box>

            <Box sx={{ pt: '20px', position: "relative" }}>
                <svg
                    style={{ width: "100%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1845 1620"
                    role="img"
                    aria-label="Subscriptions"
                >
                    <style>
                        {`
              .image-mapper-shape {
                fill: rgba(0, 0, 0, 0);
                cursor: pointer;
                transition: all 0.2s ease;
              }
              .image-mapper-shape:hover {
                stroke: white;
                stroke-width: 2px;
                opacity: 0.2;
              }
            `}
                    </style>

                    <image
                        href={subscriptionsImage.src}
                        width="1845"
                        height="1620"
                    />

                    <g>
                        {areas.map((area) => (
                            <Tooltip key={area.id} title={area.title} arrow>
                                <a
                                    href={area.href}
                                    target={area.target}
                                    rel={area.target === "_blank" ? "noopener noreferrer" : undefined}
                                    aria-label={area.title}
                                >
                                    <rect
                                        x={area.x}
                                        y={area.y}
                                        width={area.width}
                                        height={area.height}
                                        className="image-mapper-shape"
                                        data-index={area.id}
                                    />
                                </a>
                            </Tooltip>
                        ))}
                    </g>
                </svg>
            </Box>
        </Box>
    );
};

export default SubscriptionsPage;