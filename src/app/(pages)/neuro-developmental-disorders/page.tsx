

import React from 'react';
import { MultiPathPage } from '@/components';
import { NeurodevelopmentalDisordersImg1, NeurodevelopmentalDisordersImg2 } from '@/assets';

const neurodevelopmentalDisordersData = [
  {
    key: 'neurodevelopmental-1',
    link: '/attention-deficit-hyperactivity-disordera',
    icon: NeurodevelopmentalDisordersImg1,
  },
  {
    key: 'neurodevelopmental-2',
    link: '/intellectual-disability',
    icon: NeurodevelopmentalDisordersImg2,
  },
];

const NeuroDevelopmentalDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={neurodevelopmentalDisordersData}
      pageTitle="Neurodevelopmental Disorders"
      backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default NeuroDevelopmentalDisordersPage;