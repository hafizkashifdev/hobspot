'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Stack, styled, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { Events } from '@/assets';

const EventsImageMap = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/hubspot-marketing");
  }, [router]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"Marketing Events"}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
       Marketing Events
        </Typography>
      </Stack>
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto',
      aspectRatio: '1848/514' // Maintain original aspect ratio
    }}>
      {/* Next.js Image component with the SVG as source */}
      <Image
        src={Events}
        alt="Events Diagram"
        width={1848}
        height={514}
        style={{ 
          width: '100%', 
          height: 'auto',
          aspectRatio: '1848/514'
        }}
      />
      
      {/* First interactive area - "Create Marketing Events" */}
      <Box
        component="a"
        href="/events-create-marketing-events"
        sx={{
          position: 'absolute',
          left: '1.71%',   // 31.58974358974359 / 1848 * 100
          top: '6.15%',     // 31.58974358974359 / 514 * 100
          width: '24.22%',  // 447.5213675213675 / 1848 * 100
          height: '10.58%', // 54.4045584045584 / 514 * 100
          cursor: 'pointer',
          '&:hover': {
            outline: '2px solid white',
            opacity: 0.2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
        title="1"
      />
      
      {/* Second interactive area - "Details" */}
      <Box
        component="a"
        href="/events-details"
        sx={{
          position: 'absolute',
          left: '3.04%',   // 56.15954415954416 / 1848 * 100
          top: '64.53%',    // 331.6923076923077 / 514 * 100
          width: '8.07%',   // 149.17378917378917 / 1848 * 100
          height: '27.31%', // 140.3988603988604 / 514 * 100
          cursor: 'pointer',
          '&:hover': {
            outline: '2px solid white',
            opacity: 0.2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
        title="1.1"
      />
    </Box>
    </Box>
  );
};

export default EventsImageMap;