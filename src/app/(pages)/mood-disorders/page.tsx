


import { MultiPathPage } from '@/components';
import { MoodDisordersImg1, MoodDisordersImg2, MoodDisordersImg3, MoodDisordersImg4 } from '@/assets';
import React from 'react';

const moodDisordersData = [
  {
    key: 'depression',
    link: '/major-depressive-disorder',
    icon: MoodDisordersImg1,
  },
  {
    key: 'bipolar',
    link: '/bipolar-disorder',
    icon: MoodDisordersImg2,
  },
  {
    key: 'cyclothymia',
    link: '/dysthymia-persistent-epressive-disorder',
    icon: MoodDisordersImg3,
  },
  {
    key: 'dysthymia',
    link: '/cyclothymia',
    icon: MoodDisordersImg4,
  },
];

const MoodDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={moodDisordersData}
      pageTitle="Mood Disorders"
      backRoute="/"
    />
  );
};

export default MoodDisordersPage;