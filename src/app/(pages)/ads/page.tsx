'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { ADs } from '@/assets';

const AdsCampaignImageMap = () => {
  const links = [
    {
      href: "/ads-create-ads-campaign",
      title: "1 - Create Ads Campaign",
      position: { x: 35, y: 33, width: 381, height: 77 },
      target: "_parent"
    },
    {
      href: "/ads-create-audience",
      title: "2 - Create Audience",
      position: { x: 30, y: 363, width: 332, height: 81 },
      target: "_parent"
    },
    {
      href: "/ads-create-goal",
      title: "3 - Create Goal",
      position: { x: 37, y: 1100, width: 261, height: 54 },
      target: "_parent"
    },
    {
      href: "/campaigns-manage-campaign",
      title: "4 - Manage Campaign",
      position: { x: 46, y: 1436, width: 365, height: 61 },
      target: "_parent"
    },
    {
      href: "/ads-campaign-audience",
      title: "5 - Campaign Audience",
      position: { x: 47, y: 1936, width: 209, height: 54 },
      target: "_parent"
    },
    {
      href: "/ads-campaign-events",
      title: "6 - Campaign Events",
      position: { x: 369, y: 1936, width: 223, height: 81 },
      target: "_parent"
    },
    {
      href: "/ads-campaign-analyze",
      title: "7 - Campaign Analyze",
      position: { x: 704, y: 1939, width: 198, height: 58 },
      target: "_parent"
    },
    {
      href: "/ads-create-audience-website-visitors",
      title: "2.1 - Website Visitors",
      position: { x: 72, y: 481, width: 168, height: 146 },
      target: "_parent"
    },
    {
      href: "/ads-create-audience-contact-list",
      title: "2.2 - Contact List",
      position: { x: 75, y: 672, width: 160, height: 168 },
      target: "_parent"
    },
    {
      href: "/ads-create-audience-company-list",
      title: "2.3 - Company List",
      position: { x: 81, y: 879, width: 147, height: 163 },
      target: "_parent"
    }
  ];
   const router = useRouter();
  
      const onBackIconClick = useCallback(() => {
          router.push('/hubspot-marketing');
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
            alt={"ADs"}
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
          ADs
          </Typography>
        </Stack>
    <Box sx={{ 
      position: 'relative',
      width: '1848px',
      height: '2203px',
      overflow: 'hidden',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Image
        src={ADs}
        alt="Ads Campaign Management Interface"
        width={1848}
        height={2203}
        quality={100}
        priority
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain'
        }}
      />
      
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target={link.target}
          sx={{
            position: 'absolute',
            left: `${link.position.x}px`,
            top: `${link.position.y}px`,
            width: `${link.position.width}px`,
            height: `${link.position.height}px`,
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              outline: '2px solid rgba(255,255,255,0.9)',
              opacity: 0.2,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '2px'
            }
          }}
          aria-label={link.title}
        >
          <Typography 
            component="span"
            sx={{
              visibility: 'hidden',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.85)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              zIndex: 10,
              fontSize: '0.875rem',
              fontWeight: '500',
              maxWidth: '280px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              pointerEvents: 'none',
              boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
              '&:hover': { 
                visibility: 'visible',
                transform: 'translateY(-100%)',
                left: '50%',
                translateX: '-50%'
              }
            }}
          >
            {link.title}
          </Typography>
        </Link>
      ))}
    </Box>
    </Box>
  );
};

export default AdsCampaignImageMap;