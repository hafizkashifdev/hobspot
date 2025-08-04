"use client";
import React from "react";
import { Box, Tooltip } from "@mui/material";
import { breezeImage } from "@/assets"; // Import your image

const BreezePage = () => {
    const areas = [
        {
            id: 1,
            x: 10.51,
            y: 66.58,
            width: 571.20,
            height: 112.14,
            href: "/overview-main-ai-components",
            title: "Breeze Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 10.51,
            y: 492.48,
            width: 350.43,
            height: 101.62,
            href: "/agent-creation",
            title: "Features",
            target: "_self"
        },
        {
            id: 3,
            x: 795.47,
            y: 455.56,
            width: 502.86,
            height: 110.38,
            href: "/general-information-setup",
            title: "Integration",
            target: "_self"
        },
        {
            id: 4,
            x: 42.05,
            y: 784.96,
            width: 592.22,
            height: 141.92,
            href: "/content-knowledge-base-setup",
            title: "Documentation",
            target: "_self"
        },
    ];

    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1845 1195"
                role="img"
                aria-label="Breeze Platform Overview"
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
                    href={breezeImage.src}
                    width="1845"
                    height="1195"
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

export default BreezePage;