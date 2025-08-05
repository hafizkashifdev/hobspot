"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";


interface ProductPageProps {
    backRoute?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({
    backRoute = "/hubspot-commerce"
}) => {
    const router = useRouter();
    const areas = [
        {
            id: 1,
            x: 15.79,
            y: 91.26,
            width: 377.32,
            height: 101.79,
            href: "/creating-a-product",
            title: "Product Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 42.12,
            y: 447.52,
            width: 566.86,
            height: 103.54,
            href: "/using-products-in-commerce-hub",
            title: "Product Configuration",
            target: "_self"
        },
        {
            id: 3,
            x: 914.35,
            y: 452.79,
            width: 456.30,
            height: 101.79,
            href: "/tracking-automation",
            title: "Tracking & Automation",
            target: "_self"
        },
    ];

    const onBackIconClick = useCallback(() => {
        router.push(backRoute);
    }, [router, backRoute]);

    return (
        <Box sx={{ p: '40px' }}>
            <Box>
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
                    Products
                </Typography>
            </Box>

            <Box sx={{ pt: '20px', position: "relative" }}>
                <svg
                    style={{ width: "100%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1848 842"
                    role="img"
                    aria-label="Product Management System"
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
                        href={productImage.src}
                        width="1848"
                        height="842"
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

export default ProductPage;