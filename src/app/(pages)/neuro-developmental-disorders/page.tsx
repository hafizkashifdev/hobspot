

import React from 'react';
import { MultiPathPage } from '@/components';
import { NeurodevelopmentalDisordersImg1, NeurodevelopmentalDisordersImg2 } from '@/assets';

const neurodevelopmentalDisordersData = [
  {
    key: 'neurodevelopmental-1',
    link: '/neuro-developmental-disorders',
    icon: NeurodevelopmentalDisordersImg1,
  },
  {
    key: 'neurodevelopmental-2',
    link: '/Intellectual Disability',
    icon: NeurodevelopmentalDisordersImg2,
  },
];

const NeuroDevelopmentalDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={neurodevelopmentalDisordersData}
      pageTitle="Neurodevelopmental Disorders"
      backRoute="/"
    />
  );
};

export default NeuroDevelopmentalDisordersPage;