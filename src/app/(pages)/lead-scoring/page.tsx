'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { LeadScoring } from '@/assets';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';

const LeadScoringImageMap = () => {
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
          alt={"Lead Scoring"}
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
          Lead Scoring
        </Typography>
      </Stack>
    <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
      {/* Next.js Image component with the SVG as source */}
      <Image
        src={LeadScoring}
        alt="Lead Scoring Diagram"
        width={1848}
        height={1013}
        style={{ width: '100%', height: 'auto' }}
      />
      
      {/* Interactive areas */}
      <Box
        component="a"
        href="/lead-scoring-choose-type-contacts"
        sx={{
          position: 'absolute',
          left: '1.71%',  // 31.58974358974359 / 1848 * 100
          top: '3.12%',   // 31.58974358974359 / 1013 * 100
          width: '20.04%', // 370.3019943019943 / 1848 * 100
          height: '5.72%', // 57.91452991452991 / 1013 * 100
          '&:hover': {
            border: '2px solid white',
            opacity: 0.2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
        title="1"
      />
      
      <Box
        component="a"
        href="/lead-scoring-choose-type-contacts"
        sx={{
          position: 'absolute',
          left: '17.38%',  // 321.1623931623932 / 1848 * 100
          top: '31.7%',    // 321.1623931623932 / 1013 * 100
          width: '12.16%', // 224.63817663817656 / 1848 * 100
          height: '17.15%', // 173.74358974358972 / 1013 * 100
          '&:hover': {
            border: '2px solid white',
            opacity: 0.2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
        title="2.1"
      />
      
      <Box
        component="a"
        href="/lead-scoring-details"
        sx={{
          position: 'absolute',
          left: '2.18%',   // 40.364672364672366 / 1848 * 100
          top: '54.57%',  // 552.8205128205128 / 1013 * 100
          width: '19.94%', // 368.54700854700855 / 1848 * 100
          height: '5.54%', // 56.15954415954411 / 1013 * 100
          '&:hover': {
            border: '2px solid white',
            opacity: 0.2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
        title="2"
      />
    </Box>
    </Box>
  );
};

export default LeadScoringImageMap;