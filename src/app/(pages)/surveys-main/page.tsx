"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { surveysImage } from "@/assets";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";

const BreezePage = ({
    backRoute = "/hubspot-automations",
}) => {
    const areas = [
        {
            id: 1,
            x: 7.02,
            y: 33.34,
            width: 670.40,
            height: 91.26,
            href: "/create-a-survey-to-collect-feedback",
            title: "Breeze Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 17.55,
            y: 145.66,
            width: 300.10,
            height: 70.20,
            href: "/feedback-survey-manage",
            title: "Agent Creation",
            target: "_self"
        },
        {
            id: 3,
            x: 22.81,
            y: 370.30,
            width: 328.18,
            height: 115.83,
            href: "/feedback-survey-all-responses",
            title: "General Information Setup",
            target: "_self"
        },
        {
            id: 4,
            x: 819.58,
            y: 351.00,
            width: 373.81,
            height: 138.64,
            href: "/feedback-survey-response-tags",
            title: "Knowledge Base Setup",
            target: "_self"
        },
        {
            id: 5,
            x: 22.81,
            y: 670.40,
            width: 359.77,
            height: 108.81,
            href: "/create-survey-how-it-works",
            title: "Survey Creation",
            target: "_self"
        },
        {
            id: 6,
            x: 35.10,
            y: 780.97,
            width: 317.65,
            height: 85.99,
            href: "/create-survey-how-it-works",
            title: "Survey Templates",
            target: "_self"
        },
        {
            id: 7,
            x: 1232,
            y: 740.60,
            width: 275.53,
            height: 152.68,
            href: "/create-survey-preview",
            title: "Survey Analytics",
            target: "_self"
        },
        {
            id: 8,
            x: 36.85,
            y: 1072.30,
            width: 356.26,
            height: 115.83,
            href: "/create-survey-delivery-method",
            title: "Response Management",
            target: "_self"
        },
        {
            id: 9,
            x: 42.12,
            y: 1396.97,
            width: 286.06,
            height: 121.09,
            href: "/customise-survey",
            title: "Survey Distribution",
            target: "_self"
        },
        {
            id: 10,
            x: 77.22,
            y: 1528.59,
            width: 238.68,
            height: 212.35,
            href: "/customise-survey",
            title: "Customise Survey",
            target: "_self"
        },
        {
            id: 11,
            x: 347.49,
            y: 1523.33,
            width: 212.35,
            height: 208.84,
            href: "/customise-thankyou",
            title: "Survey Settings",
            target: "_self"
        },
        {
            id: 12,
            x: 687.95,
            y: 1514.55,
            width: 256.23,
            height: 226.39,
            href: "/customise-email",
            title: "Survey Integrations",
            target: "_self"
        },
        {
            id: 13,
            x: 988.06,
            y: 1449.62,
            width: 333.45,
            height: 270.27,
            href: "/customise-recipient",
            title: "Survey Reporting",
            target: "_self"
        },
        {
            id: 14,
            x: 1439.09,
            y: 1467.17,
            width: 250.96,
            height: 284.31,
            href: "/customise-automation",
            title: "Survey Administration",
            target: "_self"
        },
        {
            id: 15,
            x: 7.02,
            y: 1863.79,
            width: 356.26,
            height: 114.07,
            href: "/industry-standard-survey",
            title: "Survey Help",
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
                    alt={'Surveys'}
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
                    {'Surveys'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1848 2473"
                role="img"
                aria-label="Breeze Platform Overview"
            >
                <style>
                    {`
                        .image-mapper-shape {
                            fill: rgba(0, 0, 0, 0);
                        }
                        g:hover .image-mapper-shape {
                            stroke: white;
                            stroke-width: 2px;
                            opacity: 20%;
                        }
                    `}
                </style>

                <image
                    xlinkHref={surveysImage.src}
                    style={{ width: "1848px" }}
                />

                {areas.map((area) => (
                    <Tooltip key={area.id} title={area.title} arrow>
                        <a
                            href={area.href}
                            target={area.target}
                            title={area.title}
                        >
                            <g>
                                <rect
                                    x={area.x}
                                    y={area.y}
                                    width={area.width}
                                    height={area.height}
                                    className="image-mapper-shape"
                                    data-index={area.id}
                                />
                            </g>
                        </a>
                    </Tooltip>
                ))}
            </svg>
        </Box>
    );
};

export default BreezePage;