'use client'
import {
  LogoFaGlobal,
  DataManagementImage1,
  DataManagementImage2,
  DataManagementImage3,
  DataManagementImage6,
  DataManagementImage5,
  DataManagementImage4,
} from "@/assets";
import { MultiBackIcon } from "@/assets/common-assets"
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const cardsData = [
  { key: '1', title: 'Integrations', href: '/data-management-integrations', icon: DataManagementImage1 },
  { key: '2', title: 'Custom Events', href: '/data-management-custom-events', icon: DataManagementImage2 },
  { key: '3', title: 'Data Quality', href: '/data-management-data-quality', icon: DataManagementImage3 },
  { key: '4', title: 'Datasets', href: '/data-management-datasets', icon: DataManagementImage4 },
  { key: '5', title: 'Data Model', href: '/data-management-data-model', icon: DataManagementImage5 },
  { key: '6', title: 'Data Enrichment', href: '/data-management-data-enrichment', icon: DataManagementImage6 },
]

export default function HubspotCommercePage() {
  return (
    <>
      <Box p={{ xs: 3, md: 4, lg: 6 }} position="relative">
        <Stack
          flexDirection="row"
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems="flex-end"
        >
          <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Box component={Link} href="/">
              <Image
                src={MultiBackIcon}
                alt={''}
                width={48}
                height={48}
              />
            </Box>
            <Typography
              variant="h3"
              color="#0246BC"
              fontSize={"70px"}
              fontWeight={600}
            >
              Data Management
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Image
              src={LogoFaGlobal}
              alt={'Fa Global'}
              width={300}
              height={150}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>

        </Stack>

        <Box mt={"70px"}>
          <Grid container spacing={2}>
            {cardsData.map((item, id) => (
              <Grid
                key={id}
                size={{
                  xs: 12,
                  md: 6,
                  lg: 4
                }}
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
                  }}
                >

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Image
                      src={item.icon}
                      alt={item.title ?? item.key}
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    color="#024D9C"
                    fontSize={{ xs: "1.2rem", sm: "18px", md: "24px" }}
                    fontWeight={"500"}
                    sx={{
                      fontFamily: "inherit",
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
    </>
  );
}
