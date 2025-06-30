

import React from 'react';
import { MultiPathPage } from '@/components';
import { PersonalityDisordersImg1, PersonalityDisordersImg2 } from '@/assets';

const personalityDisordersData = [
  {
    key: 'personality-1',
    link: '/personality-disorders/img-1',
    icon: PersonalityDisordersImg1,
  },
  {
    key: 'personality-2',
    link: 'personality-disorders/img-2',
    icon: PersonalityDisordersImg2,
  },
];

const PersonalityDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={personalityDisordersData}
      pageTitle="Personality Disorders"
      backRoute="/"
    />
  );
};

export default PersonalityDisordersPage;