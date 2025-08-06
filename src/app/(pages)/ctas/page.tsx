'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { CTAs } from '@/assets';

const CTAsImageMap = () => {
  const links = [
    {
      href: "/cta-s-create-cta-s",
      title: "1 - Create CTAs",
      position: { x: 33, y: 33, width: 274, height: 49 },
      target: "_parent"
    },
    {
      href: "/cta-s-manage-cta-s",
      title: "2 - Manage CTAs",
      position: { x: 33, y: 383, width: 279, height: 47 },
      target: "_parent"
    },
    {
      href: "/cta-s-analyze-cta-s",
      title: "3 - Analyze CTAs",
      position: { x: 39, y: 1469, width: 281, height: 60 },
      target: "_parent"
    },
    {
      href: "/cta-s-choose-template",
      title: "1.1 - Choose Template",
      position: { x: 1295, y: 132, width: 493, height: 190 },
      target: "_parent"
    },
    {
      href: "/cta-s-cta-s-details",
      title: "2.1 - CTA Details",
      position: { x: 53, y: 605, width: 156, height: 183 },
      target: "_parent"
    },
    {
      href: "/cta-s-cta-s-views",
      title: "3.1 - CTA Views",
      position: { x: 68, y: 1813, width: 165, height: 191 },
      target: "_parent"
    }
  ];

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
          alt={"forms"}
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
          CTA's
        </Typography>
      </Stack>
    <Box sx={{ 
      position: 'relative',
      width: '1848px',
      height: '2065px',
      overflow: 'hidden',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <Image
        src={CTAs}
        alt="Call-to-Actions Management Interface"
        width={1848}
        height={2065}
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
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              outline: '2px solid rgba(255,255,255,0.95)',
              opacity: 0.2,
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
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
              backgroundColor: 'rgba(0,0,0,0.88)',
              color: 'white',
              padding: '8px 14px',
              borderRadius: '4px',
              zIndex: 10,
              fontSize: '0.875rem',
              fontWeight: '500',
              maxWidth: '300px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              pointerEvents: 'none',
              boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
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

export default CTAsImageMap;