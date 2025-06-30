

import React from 'react';
import { MultiPathPage } from '@/components';
import { AnxietyDisordersImg1, AnxietyDisordersImg2, AnxietyDisordersImg3, AnxietyDisordersImg4, BipolarDisorderIcon } from '@/assets';

const anxietyDisordersData = [
  {
    key: 'anxiety-1',
    link: '/generalized-anxiety-disorder',
    icon: AnxietyDisordersImg1,
  },
  {
    key: 'anxiety-2',
    link: '/panic-disorder',
    icon: AnxietyDisordersImg2,
  },
  {
    key: 'anxiety-3',
    link: '/social-anxiety-disorder',
    icon: AnxietyDisordersImg3,
  },
  {
    key: 'anxiety-4',
    link: '/anxiety-disorders/img-4',
    icon: AnxietyDisordersImg4,
  },
  
];

const AnxietyDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={anxietyDisordersData}
      pageTitle="Anxiety Disorders"
      backRoute="/"
    />
  );
};

export default AnxietyDisordersPage;