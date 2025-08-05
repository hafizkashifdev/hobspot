"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { LogoFaGlobal, } from "@/assets";
import { MultiBackIcon } from "@/assets/common-assets";

interface CardData {
  key: string;
  title: string;
  href: string;
  icon: string;
}

interface GridSize {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface FaGlobalScreenProps {
  pageTitle: string;
  cardsData: CardData[];
  gridSize?: GridSize;
  backRoute?: string;
  showBackButton?: boolean;
}

const FaGlobalScreen = ({
  pageTitle,
  cardsData,
  gridSize = { xs: 12, md: 6, lg: 3 },
  backRoute = '/',
  showBackButton = false
}: FaGlobalScreenProps) => {
  return (
    <Box p={{ xs: 3, md: 4, lg: 6 }} position="relative">
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap'
        }}
      >
        <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {showBackButton && (
            <Box component={Link} href={backRoute}>
              <Image
                src={MultiBackIcon}
                alt={'Back'}
                width={48}
                height={48}
              />
            </Box>
          )}

          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={"70px"}
            fontWeight={600}
          >
            {pageTitle}
          </Typography>
        </Box>

        {/* Fa Global Logo */}
        <Box sx={{ display: 'flex' }}>
          <Image
            src={LogoFaGlobal}
            alt={'Fa Global'}
            width={300}
            height={150}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Cards Grid */}
      <Box mt={"70px"}>
        <Grid container spacing={2}>
          {cardsData?.map((item) => (
            <Grid
              key={item.key}
              size={gridSize}
            >
              <Box
                component={Link}
                href={item.href}
                sx={{
                  display: "block",
                  p: "80px 80px 40px",
                  position: "relative",
                  backgroundColor: '#E1ECFF',
                  borderRadius: "40px",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={item.icon}
                    alt={item.title || item.key}
                    width={200}
                    height={200}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#024D9C",
                    fontFamily: "inherit",
                    fontSize: { xs: "1.2rem", sm: "18px", md: "24px" },
                    fontWeight: "500",
                    textAlign: "center",
                    maxWidth: "247px",
                    mx: "auto",
                    mt: "20px",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FaGlobalScreen;
