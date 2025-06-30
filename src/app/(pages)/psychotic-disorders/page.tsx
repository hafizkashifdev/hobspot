
import React from 'react';
import { MultiPathPage } from '@/components';
import { PsychoticDisordersImg1, PsychoticDisordersImg2 } from '@/assets';

const psychoticDisordersData = [
  {
    key: 'psychotic-1',
    link: '/schizophrenia',
    icon: PsychoticDisordersImg1,
  },
  {
    key: 'psychotic-2',
    link: '/schizoaffective-disorders',
    icon: PsychoticDisordersImg2,
  },
];

const PsychoticDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={psychoticDisordersData}
      pageTitle="Psychotic Disorders"
        backRoute="/psychiatric-assessment-mental-health-disorders"
    />
  );
};

export default PsychoticDisordersPage;