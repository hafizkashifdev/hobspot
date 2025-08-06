'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { BuyerIntent } from '@/assets';

const BuyerIntentImageMap = () => {
  const links = [
    {
      href: "/buyer-intent-overview",
      title: "1 - Overview",
      position: { x: 25, y: 16, width: 221, height: 44 },
      target: "_parent"
    },
    {
      href: "/buyer-intent-companies",
      title: "2 - Companies",
      position: { x: 16, y: 420, width: 236, height: 72 },
      target: "_parent"
    },
    {
      href: "/buyer-intent-configuration",
      title: "3 - Configuration",
      position: { x: 12, y: 1135, width: 321, height: 69 },
      target: "_parent"
    },
    {
      href: "/buyer-intent-configuration-add-target-market",
      title: "3.1 - Add Target Market",
      position: { x: 37, y: 1247, width: 411, height: 53 },
      target: "_parent"
    },
    {
      href: "/buyer-intent-configuration-add-intent-criteria",
      title: "3.2 - Add Intent Criteria",
      position: { x: 32, y: 1682, width: 397, height: 72 },
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
            alt={"BuyerIntent"}
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
          Buyer Intent
          </Typography>
        </Stack>
    <Box sx={{ 
      position: 'relative',
      width: '1858px',
      height: '2224px',
      overflow: 'hidden',
      margin: '0 auto',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '6px'
    }}>
      <Image
        src={BuyerIntent}
        alt="Buyer Intent Dashboard Interface"
        width={1858}
        height={2224}
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
            transition: 'all 0.18s ease-out',
            '&:hover': {
              outline: '2px solid rgba(255,255,255,0.9)',
              opacity: 0.2,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '3px'
            }
          }}
          aria-label={link.title}
        >
          <Typography 
            component="span"
            sx={{
              visibility: 'hidden',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.87)',
              color: 'white',
              padding: '8px 14px',
              borderRadius: '5px',
              zIndex: 10,
              fontSize: '0.875rem',
              fontWeight: '500',
              maxWidth: '320px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
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

export default BuyerIntentImageMap;