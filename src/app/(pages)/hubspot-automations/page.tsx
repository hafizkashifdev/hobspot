'use client'
import {
  LogoFaGlobal,
  AutomationsImage1,
  AutomationsImage2,
  AutomationsImage3,

} from "@/assets";
import { MultiBackIcon } from "@/assets/common-assets"
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const cardsData = [
  { key: '1', title: 'Workflows', href: '/workflows', icon: AutomationsImage1 },
  { key: '2', title: 'Chatflows', href: '/chatflows', icon: AutomationsImage2 },
  { key: '3', title: 'Surveys', href: '/surveys', icon: AutomationsImage3 },
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
              fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
              fontWeight={600}
            >
              Automations
            </Typography>
          </Box>
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
