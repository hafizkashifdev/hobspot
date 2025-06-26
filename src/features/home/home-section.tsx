import React from "react";
import Link from "next/link";
import Image from "next/image";
import { homeData } from "./home-section-data";
import { Container, Grid } from "@mui/material";

const HomeSection = () => {
  return (
    <>
      <Grid container spacing={3}>
        {homeData.map((item: any) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
            <Link href={item.link} style={{ textDecoration: "none" }}>
              <Image
                src={item.icon}
                alt="Hero Image"
                width={100}
                height={100}
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeSection;
