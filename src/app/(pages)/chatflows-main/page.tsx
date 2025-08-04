"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { chatflowsImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

interface ChatflowsPageProps {
    backRoute?: string;
}

const ChatflowsPage: React.FC<ChatflowsPageProps> = ({
    backRoute = "/hubspot-commerce"
}) => {
    const router = useRouter();
    const areas = [
        {
            id: 1,
            x: 0,
            y: 19.30,
            width: 363.28,
            height: 100.03,
            href: "/chat-flow-tabs-view",
            title: "Chatflow Introduction",
            target: "_self"
        },
        {
            id: 2,
            x: 3.51,
            y: 479.11,
            width: 387.85,
            height: 93.01,
            href: "/create-chat-flow-step-1-channel-select-channel",
            title: "Chatflow Setup",
            target: "_self"
        },
        {
            id: 3,
            x: 50.89,
            y: 580.90,
            width: 616,
            height: 115.83,
            href: "/create-chat-flow-step-1-channel-select-channel",
            title: "Chatflow Configuration",
            target: "_self"
        },
        {
            id: 4,
            x: 698.48,
            y: 552.82,
            width: 465.07,
            height: 156.19,
            href: "/create-chat-flow-step-2-workspace",
            title: "Create Chatflow - Step 2: Workspace",
            target: "_self"
        },
        {
            id: 5,
            x: 1193.39,
            y: 554.58,
            width: 382.59,
            height: 136.89,
            href: "/create-chat-flow-step-3-chat-flow",
            title: "Create Chatflow - Step 3: Chat Flow",
            target: "_self"
        },
        {
            id: 6,
            x: 8.77,
            y: 789.74,
            width: 1769.03,
            height: 94.77,
            href: "/create-chat-flow-step-4-details-create-survey",
            title: "Chatflow Deployment",
            target: "_self"
        },
        {
            id: 7,
            x: 35.10,
            y: 896.80,
            width: 287.82,
            height: 80.73,
            href: "/create-chat-flow-step-4-details-create-survey-build-tab",
            title: "Chatflow Templates",
            target: "_self"
        },
        {
            id: 8,
            x: 52.65,
            y: 1124.95,
            width: 324.67,
            height: 115.83,
            href: "/create-chat-flow-step-4-details-create-survey-target-tab",
            title: "Chatflow Analytics",
            target: "_self"
        },
        {
            id: 9,
            x: 854.68,
            y: 1117.93,
            width: 343.98,
            height: 126.36,
            href: "/create-chat-flow-step-4-details-create-survey-options",
            title: "Chatflow Integrations",
            target: "_self"
        },
        {
            id: 10,
            x: 35.10,
            y: 1418.03,
            width: 349.24,
            height: 143.91,
            href: "/create-chat-flow-step-4-details-create-survey-display-tab",
            title: "Create Chatflow - Step 4: Details (Create Survey)",
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
                    Chatflows Management
                </Typography>
            </Box>

            <Box sx={{ pt: '20px', position: "relative" }}>
                <svg
                    style={{ width: "100%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1848 1908"
                    role="img"
                    aria-label="Chatflows Management System"
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
                        href={chatflowsImage.src}
                        width="1848"
                        height="1908"
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

export default ChatflowsPage;