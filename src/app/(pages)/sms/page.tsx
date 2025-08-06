'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { SmsMarketing } from '@/assets';

const SmsMarketingImageMap = () => {
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
          alt={"SMS Marketing "}
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
          SMS Marketing 
        </Typography>
      </Stack>
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: 'auto',
      aspectRatio: '1858/478' // Maintain original aspect ratio
    }}>
      {/* Next.js Image component */}
      <Image
        src={SmsMarketing}
        alt="SMS Marketing Diagram"
        width={1858}
        height={478}
        style={{
          width: '100%',
          height: 'auto'
        }}
        priority // Optional: if this is above-the-fold content
      />

      {/* Clickable area for "Create SMS Marketing" */}
      <Box
        component="a"
        href="/create-sms-marketing"
        sx={{
          position: 'absolute',
          left: '0.85%',    // 15.88034188034188 / 1858 * 100
          top: '0.74%',      // 3.5289648622981957 / 478 * 100
          width: '22.6%',    // 419.9468186134853 / 1858 * 100
          height: '14.76%', // 70.57929724596391 / 478 * 100
          cursor: 'pointer',
          '&:hover': {
            outline: '2px solid white',
            opacity: 0.2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }
        }}
        title="1"
      />
    </Box>
    </Box>
  );
};

export default SmsMarketingImageMap;