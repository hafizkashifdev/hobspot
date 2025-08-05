"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { workflowsImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

interface WorkflowsPageProps {
    backRoute?: string;
}

const WorkflowsPage: React.FC<WorkflowsPageProps> = ({
    backRoute = "/hubspot-automations"
}) => {
    const router = useRouter();
    const areas = [
        {
            id: 1,
            x: 14.04,
            y: 64.93,
            width: 256.23,
            height: 122.85,
            href: "/workflow-manage",
            title: "Workflow Management",
            target: "_self"
        },
        {
            id: 2,
            x: 29.83,
            y: 340.47,
            width: 417.69,
            height: 149.17,
            href: "/create-workflow",
            title: "Workflow Creation",
            target: "_self"
        },
        {
            id: 3,
            x: 19.30,
            y: 912.59,
            width: 359.77,
            height: 112.32,
            href: "/form-scratch",
            title: "Workflow Automation",
            target: "_self"
        },
        {
            id: 4,
            x: 35.10,
            y: 1470.68,
            width: 544.05,
            height: 142.15,
            href: "/trigger-enrollments-for-contacts",
            title: "Workflow Templates",
            target: "_self"
        },
        {
            id: 5,
            x: 28.08,
            y: 1867.30,
            width: 256.23,
            height: 173.74,
            href: "/analyse",
            title: "Workflow Monitoring",
            target: "_self"
        },
        {
            id: 6,
            x: 5.26,
            y: 2392.05,
            width: 310.63,
            height: 196.56,
            href: "/health",
            title: "Workflow Analytics",
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
                    Workflows
                </Typography>
            </Box>

            <Box sx={{ pt: '20px', position: "relative" }}>
                <svg
                    style={{ width: "100%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1848 3006"
                    role="img"
                    aria-label="Workflows"
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
                        href={workflowsImage.src}
                        width="1848"
                        height="3006"
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

export default WorkflowsPage;