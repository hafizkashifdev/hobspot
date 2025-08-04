"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { invoicesImage } from "@/assets"; // Import your invoices image
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";

const InvoicesPage = ({
    backRoute = "/hubspot-commerce"
}) => {
    const areas = [
        {
            id: 1,
            x: 17.55,
            y: 12.28,
            width: 236.92,
            height: 101.79,
            href: "/invoices", // Update with your actual route
            title: "Invoices Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 43.87,
            y: 454.54,
            width: 338.71,
            height: 114.07,
            href: "/invoice-workflow",
            title: "Invoice Creation",
            target: "_self"
        },
        {
            id: 3,
            x: 31.59,
            y: 1221.47,
            width: 533.52,
            height: 145.66,
            href: "/invoice-types-customization",
            title: "Invoice Management",
            target: "_self"
        },
        {
            id: 4,
            x: 38.61,
            y: 1602.30,
            width: 552.82,
            height: 105.30,
            href: "/payment-processing-for-invoices",
            title: "Invoice Settings",
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
                    alt={'Invoices'}
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
                    {'Invoices'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1848 2845"
                role="img"
                aria-label="Invoices Management System"
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
                    href={invoicesImage.src}
                    width="1848"
                    height="2845"
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

export default InvoicesPage;