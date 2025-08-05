"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  LogoFaGlobal,
  HubspotHome1,
  HubspotHome2,
  HubspotHome3,
  HubspotHome4,
  HubspotHome5,
  HubspotHome6,
  HubspotHome7,
  HubspotHome8,
  HubspotHome9,
  HubspotHome10,
  HubspotHome11
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Workspaces', href: '/hubspot-workspace', icon: HubspotHome1 },
  { key: '2', title: 'Hubspot CRM', href: '/hubspot-crm', icon: HubspotHome2 },
  { key: '3', title: 'Marketing', href: '/hubspot-marketing', icon: HubspotHome3 },
  { key: '4', title: 'Content', href: '/content', icon: HubspotHome4 },
  { key: '5', title: 'Commerce', href: '/hubspot-commerce', icon: HubspotHome5 },
  { key: '6', title: 'Automations', href: '/hubspot-automations', icon: HubspotHome6 },
  { key: '7', title: 'Reporting', href: '/hubspot-reporting', icon: HubspotHome7 },
  { key: '8', title: 'Data Management', href: '/hubspot-data-management', icon: HubspotHome8 },
  { key: '9', title: 'Library', href: '/library', icon: HubspotHome9 },
  { key: '10', title: 'Breeze', href: '/breeze', icon: HubspotHome10 },
  { key: '11', title: 'Settings ', href: '/hubspot-settings', icon: HubspotHome11 },
]

const HubspotHome = () => {
  return (
    <Box p={{ xs: 3, md: 4, lg: 6 }} position="relative">
      <Stack
        flexDirection="row"
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems="flex-end"
      >
        <Typography
          variant="h3"
          color="#0246BC"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
        >
          FA Global
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Image
            src={LogoFaGlobal}
            alt={'Fa Global'}
            width={300}
            height={150}
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
                lg: 3
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
  );
};

export default HubspotHome;
