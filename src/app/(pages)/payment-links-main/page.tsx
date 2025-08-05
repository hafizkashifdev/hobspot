"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { paymentLinksImage } from "@/assets"; // Import your payment links image
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";

const PaymentLinksPage = ({
    backRoute = "/hubspot-commerce"
}) => {
    const areas = [
        {
            id: 1,
            x: 33.34,
            y: 91.26,
            width: 445.77,
            height: 119.34,
            href: "/creating-a-payment-link", // Update with your actual route
            title: "Payment Links Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 43.87,
            y: 451.03,
            width: 440.50,
            height: 114.07,
            href: "/sharing-a-payment-link",
            title: "Payment Link Creation",
            target: "_self"
        },
        {
            id: 3,
            x: 756.40,
            y: 445.77,
            width: 498.42,
            height: 126.36,
            href: "/customer-checkout-process",
            title: "Customer Checkout Process",
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
                    alt={'Payment Links'}
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
                    {'Payment Links'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1848 1175"
                role="img"
                aria-label="Payment Links System"
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
                    href={paymentLinksImage.src}
                    width="1848"
                    height="1175"
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

export default PaymentLinksPage;