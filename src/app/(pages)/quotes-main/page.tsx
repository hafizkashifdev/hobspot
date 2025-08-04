"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { quotesImage } from "@/assets"; // Import your quotes image
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";

const QuotesPage = ({
    backRoute = "/hubspot-commerce"
}) => {
    const areas = [
        {
            id: 1,
            x: 12.28,
            y: 115.83,
            width: 375.57,
            height: 87.75,
            href: "/creating-a-quote",
            title: "Creating a Quote",
            target: "_self"
        },
        {
            id: 2,
            x: 36.85,
            y: 442.26,
            width: 498.42,
            height: 126.36,
            href: "/sharing-customer-review",
            title: "Quote Customization",
            target: "_self"
        },
        {
            id: 3,
            x: 1000.34,
            y: 445.77,
            width: 535.27,
            height: 105.30,
            href: "/customer-acceptance-payment",
            title: "Quote Approval",
            target: "_self"
        },
        {
            id: 4,
            x: 29.83,
            y: 740.60,
            width: 554.58,
            height: 161.46,
            href: "/quote-tracking-automation",
            title: "Quote Tracking & Automation",
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
                    alt={'Quotes'}
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
                    {'Quotes'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1848 1175"
                role="img"
                aria-label="Quotes Management System"
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
                    href={quotesImage.src}
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

export default QuotesPage;