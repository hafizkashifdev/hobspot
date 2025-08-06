'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { Form } from '@/assets';

const FormBuilderImageMap = () => {
  const links = [
    {
      href: "/forms-form-properties",
      title: "1",
      position: { x: 44, y: 37, width: 242, height: 46 },
      target: "_parent"
    },
    {
      href: "/forms-start-from-scratch-form",
      title: "1.1.1",
      position: { x: 319, y: 87, width: 185, height: 158 },
      target: "_parent"
    },
    {
      href: "/forms-create-choose-form-type",
      title: "1.1",
      position: { x: 23, y: 187, width: 215, height: 164 },
      target: "_parent"
    },
    {
      href: "/forms-form-properties",
      title: "form properties",
      position: { x: 596, y: 96, width: 162, height: 133 },
      target: "_parent"
    },
    {
      href: "/forms-legacy-form-editor",
      title: "1.2",
      position: { x: 32, y: 564, width: 180, height: 164 },
      target: "_parent"
    },
    {
      href: "/forms-form-select-template",
      title: "1.2.1",
      position: { x: 317, y: 616, width: 198, height: 149 },
      target: "_parent"
    },
    {
      href: "/forms-select-template",
      title: "2",
      position: { x: 30, y: 949, width: 265, height: 85 },
      target: "_parent"
    },
    {
      href: "/forms-manage-forms",
      title: "2.1",
      position: { x: 34, y: 1141, width: 164, height: 137 },
      target: "_parent"
    },
    {
      href: "/forms-analyze-forms",
      title: "2.2",
      position: { x: 27, y: 2130, width: 183, height: 158 },
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
          Forms
        </Typography>
      </Stack>
    <Box sx={{ 
      position: 'relative',
      width: '1874px',
      height: '2883px',
      overflow: 'hidden',
      margin: '0 auto',
      backgroundColor: '#f8f9fa'
    }}>
      <Image
        src={Form}
        alt="Form Builder Interface"
        width={1874}
        height={2883}
        quality={100}
        priority
        style={{
          width: '100%',
          height: 'auto'
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
            transition: 'all 0.2s ease',
            '&:hover': {
              outline: '2px solid rgba(255,255,255,0.8)',
              opacity: 0.2,
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
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
              zIndex: 2,
              fontSize: '0.875rem',
              fontWeight: '500',
              maxWidth: '280px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              pointerEvents: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              '&:hover': { 
                visibility: 'visible',
                transform: 'translateY(-100%)'
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

export default FormBuilderImageMap;