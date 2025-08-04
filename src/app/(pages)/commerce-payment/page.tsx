"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { paymentImages } from "@/assets"; // Import your payment image
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
const PaymentMethodsPage = ({
    backRoute = "/hubspot-commerce",
}) => {

    const areas = [
        {
            id: 1,
            x: 38.61,
            y: 108.81,
            width: 494.91,
            height: 85.99,
            href: "/supported-payment-method",
            title: "Supported Payment Methods",
            target: "_self"
        },
        {
            id: 2,
            x: 42.12,
            y: 1205.68,
            width: 619.51,
            height: 131.62,
            href: "/payment-processing-settlement",
            title: "Payment Processing",
            target: "_self"
        },
        {
            id: 3,
            x: 36.85,
            y: 1644.42,
            width: 587.92,
            height: 107.05,
            href: "/payment-automation-integration",
            title: "Payment Security",
            target: "_self"
        },
    ];

    const router = useRouter();
    const onBackIconClick = useCallback(() => {
        router.push(backRoute);
    }, [router, backRoute]);
    return (
        <Box sx={{ width: "100%", position: "relative", p: 3 }}>
            <Box sx={{ display: 'flex' }}>
                <Image
                    src={CommonBackIcon}
                    alt={'Payment'}
                    width={48}
                    height={48}
                    onClick={onBackIconClick}
                    style={{ cursor: "pointer" }}
                />
            </Box>
            <Box sx={{ my: '34px' }}>
                <Typography
                    variant="h5"
                    color="#5A5867"
                    fontSize={{ xs: "20", sm: "26px", md: "32px" }}
                    fontWeight={{ md: 600, xs: 500 }}
                    sx={{ fontFamily: "inherit", lineHeight: '1.25' }}
                >
                    {'Payment'}
                </Typography>
            </Box>

            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1848 2074"
                role="img"
                aria-label="Payment Methods Overview"
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
                    href={paymentImages.src}
                    width="1848"
                    height="2074"
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
    );
};

export default PaymentMethodsPage;