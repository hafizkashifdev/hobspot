'use client'
import {
  LogoFaGlobal,
  CommerceImage1,
  CommerceImage2,
  CommerceImage3,
  CommerceImage4,
  CommerceImage5,
  CommerceImage6,
} from "@/assets";
import { MultiBackIcon } from "@/assets/common-assets"
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const cardsData = [
  { key: '1', title: 'Payments', href: '/commerce-payment', icon: CommerceImage1 },
  { key: '2', title: 'Invoices', href: '/invoice-main', icon: CommerceImage2 },
  { key: '3', title: 'Payment Links', href: '/payment-links-main', icon: CommerceImage3 },
  { key: '4', title: 'Quotes', href: '/quotes-main', icon: CommerceImage4 },
  { key: '5', title: 'Products', href: '/products-main', icon: CommerceImage5 },
  { key: '6', title: 'Subscription', href: '/subscriptions-main', icon: CommerceImage6 }
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
              Commerce
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
    </>
  );
}
