"use client";

import { Box, Container, Typography } from "@mui/material";


export const OverviewSection = () => {
  return (
 <Container maxWidth="xl">

    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "2139px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px",
        boxSizing: "border-box",
        gap: "24px",
        textAlign: "left",
        fontSize: "22px",
        color: "#5a5867",
        fontFamily: "Outfit",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "24px",
        }}
      >
        <img
          style={{
            width: "48px",
            position: "relative",
            height: "48px",
            cursor: "pointer",
          }}
          width={48}
          height={48}
          sizes="100vw"
          alt=""
          src="/iconslineararrowleft.svg"
        //   onClick={onIconslineararrowLeftClick}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Mental Health
            </Typography>

            <Typography
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              /
            </Typography>
          </Box>
          <Typography
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ position: "relative", lineHeight: "40px", fontWeight: "600" }}
          >{`Overview & Purpose`}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          position: "relative",
          borderRadius: "11.5px",
          backgroundColor: "#fff",
          borderWidth: "3.8px",
          borderStyle: "dashed",
          borderColor: "#666",
          boxSizing: "border-box",
          height: "1972.8px",
          textAlign: "center",
          fontSize: "15.4px",
          fontFamily: "'Red Hat Text'",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "71.1px",
            left: "18.1px",
            borderRadius: "11.5px",
            backgroundColor: "#fff",
            borderWidth: "3.8px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "100%",
            height: "611.8px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              fontSize: "30.8px",
              fontFamily: "Outfit",
            }}
          >
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                position: "relative",
                lineHeight: "38.5px",
                fontWeight: "600",
              }}
            >
              Mental Health
            </Typography>
            {/* <CheckboxForm name="mental_health" page="overview_and_purpose" /> */}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "71.1px",
              left: "18.1px",
              borderRadius: "11.5px",
              backgroundColor: "#fff",
              borderWidth: "3.8px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "100%",
              height: "250.8px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "30.8px",
                fontFamily: "Outfit",
              }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  position: "relative",
                  lineHeight: "38.5px",
                  fontWeight: "600",
                }}
              >
                Overview
              </Typography>
            </Box>
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "653.7px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "287px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1020.4px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1398.1px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "20px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/12969133-1@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Mental disorders affect thinking and behavior.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "386.7px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/12693133-1@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Includes conditions like psychosis, depression, and anxiety.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "753.4px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/12131221-1@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Mental health history impacts trial outcomes.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1120.1px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/14764762-1@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Can cause impairment in judgment and functionality.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1497.9px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image186@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Evaluations are based on clinical diagnosis and symptoms.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "338.1px",
              left: "18.1px",
              borderRadius: "11.5px",
              backgroundColor: "#fff",
              borderWidth: "3.8px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "100%",
              height: "250.8px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "30.8px",
                fontFamily: "Outfit",
              }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  position: "relative",
                  lineHeight: "38.5px",
                  fontWeight: "600",
                }}
              >
                Purpose
              </Typography>
            </Box>
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "653.7px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "287px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1020.4px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1398.1px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "20px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image187@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Ensures defendants’ legal rights are protected.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "386.7px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image188@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Identifies if mental health interferes with trial readiness.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "753.4px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image99@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Determines if the defendant can understand proceedings.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1120.1px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image189@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Leads to mental health treatment recommendations.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1497.9px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image190@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Safeguards fairness and justice in the legal process.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "699.1px",
            left: "18.1px",
            borderRadius: "11.5px",
            backgroundColor: "#fff",
            borderWidth: "3.8px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "100%",
            height: "611.8px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              fontSize: "30.8px",
              fontFamily: "Outfit",
            }}
          >
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                position: "relative",
                lineHeight: "38.5px",
                fontWeight: "600",
              }}
            >{`Court Hearing `}</Typography>
            {/* <CheckboxForm name="court_hearing" page="overview_and_purpose" /> */}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "71.1px",
              left: "18.1px",
              borderRadius: "11.5px",
              backgroundColor: "#fff",
              borderWidth: "3.8px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "100%",
              height: "250.8px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "30.8px",
                fontFamily: "Outfit",
              }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  position: "relative",
                  lineHeight: "38.5px",
                  fontWeight: "600",
                }}
              >
                Overview
              </Typography>
            </Box>
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "653.7px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "287px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1020.4px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1398.1px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "20px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image191@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Court hearing is a legal procedure.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "386.7px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image192@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Reviews fitness to stand trial.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "753.4px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image193@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Expert testimony may be presented.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1120.1px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image194@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Decision can affect trial timing and outcome.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1497.9px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image195@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Court orders further mental health evaluations if needed.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "338.1px",
              left: "18.1px",
              borderRadius: "11.5px",
              backgroundColor: "#fff",
              borderWidth: "3.8px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "100%",
              height: "250.8px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "30.8px",
                fontFamily: "Outfit",
              }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  position: "relative",
                  lineHeight: "38.5px",
                  fontWeight: "600",
                }}
              >
                Purpose
              </Typography>
            </Box>
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "653.7px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "287px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1020.4px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1398.1px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "20px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image196@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Protects defendants' rights during trials.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "386.7px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image197@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Ensures fairness by addressing mental health conditions.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "753.4px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image198@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Determines if the trial proceeds or delays.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1120.1px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image199@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Orders appropriate mental health treatment.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1497.9px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image200@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Decides on restoration plans for fitness.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1327.1px",
            left: "18.1px",
            borderRadius: "11.5px",
            backgroundColor: "#fff",
            borderWidth: "3.8px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "100%",
            height: "611.8px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              fontSize: "30.8px",
              fontFamily: "Outfit",
            }}
          >
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                position: "relative",
                lineHeight: "38.5px",
                fontWeight: "600",
              }}
            >
              Psychiatric Evaluation
            </Typography>
            {/* <CheckboxForm
              name="psychiatric_evaluation"
              page="overview_and_purpose"
            /> */}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "71.1px",
              left: "18.1px",
              borderRadius: "11.5px",
              backgroundColor: "#fff",
              borderWidth: "3.8px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "100%",
              height: "250.8px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "30.8px",
                fontFamily: "Outfit",
              }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  position: "relative",
                  lineHeight: "38.5px",
                  fontWeight: "600",
                }}
              >
                Overview
              </Typography>
            </Box>
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "653.7px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "287px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1020.4px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1398.1px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "20px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image201@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Involves comprehensive mental health assessments.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "386.7px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image202@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Includes clinical interviews and standardized tests.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "753.4px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image203@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Evaluates diagnoses, symptoms, and treatment needs.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1120.1px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image204@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Helps determine capacity for trial participation.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1497.9px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image205@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Considers risk factors and defendant’s history.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "338.1px",
              left: "18.1px",
              borderRadius: "11.5px",
              backgroundColor: "#fff",
              borderWidth: "3.8px",
              borderStyle: "dashed",
              borderColor: "#666",
              boxSizing: "border-box",
              width: "100%",
              height: "250.8px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                fontSize: "30.8px",
                fontFamily: "Outfit",
              }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  position: "relative",
                  lineHeight: "38.5px",
                  fontWeight: "600",
                }}
              >
                Purpose
              </Typography>
            </Box>
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "653.7px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "287px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1020.4px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "127px",
                left: "1398.1px",
                borderRadius: "3.8px",
                width: "32.7px",
                height: "33.7px",
              }}
              width={32.7}
              height={33.7}
              sizes="100vw"
              alt=""
              src="/plus-icon.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "20px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image206@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Establishes mental fitness for trial participation.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "386.7px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image207@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Offers a clinical opinion on defendant’s condition.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "753.4px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image208@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Assesses mental competency to understand charges.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1120.1px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image209@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Supports decisions about treatment and intervention.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "73px",
                left: "1497.9px",
                width: "211px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15.4px",
              }}
            >
              <img
                style={{
                  width: "80px",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/image210@2x.png"
              />
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "23.1px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Ensures that defendant’s mental state is thoroughly considered.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 16px",
            fontSize: "30.8px",
            fontFamily: "Outfit",
          }}
        >
          <Typography
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{
              position: "relative",
              lineHeight: "38.5px",
              fontWeight: "600",
            }}
          >{`Overview & Purpose`}</Typography>
        </Box>
      </Box>
    </Box>


export default OverviewPurpose;
    </Container>
  );
};