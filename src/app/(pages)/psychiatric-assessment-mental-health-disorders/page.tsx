


import { MultiPathPage } from '@/components';
import {
  PsychiatricAssessmentMentalHealthDisordersImg1,
  PsychiatricAssessmentMentalHealthDisordersImg2,
  PsychiatricAssessmentMentalHealthDisordersImg3,
  PsychiatricAssessmentMentalHealthDisordersImg4,
  PsychiatricAssessmentMentalHealthDisordersImg5,
  PsychiatricAssessmentMentalHealthDisordersImg6,
  PsychiatricAssessmentMentalHealthDisordersImg7,
  PsychiatricAssessmentMentalHealthDisordersImg8,
  PsychiatricAssessmentMentalHealthDisordersImg9,
  PsychiatricAssessmentMentalHealthDisordersImg10,
  PsychiatricAssessmentMentalHealthDisordersImg11,
  PsychiatricAssessmentMentalHealthDisordersImg12,
  PsychiatricAssessmentMentalHealthDisordersImg13,
  PsychiatricAssessmentMentalHealthDisordersImg14
} from '@/assets';
import React from 'react';

const PsychiatricAssessmentMentalHealthDisordersData = [
  {
    key: 'disorder-1',
    link: '/mood-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg1,
  },
  {
    key: 'disorder-2',
    link: '/anxiety-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg2,
  },
  {
    key: 'disorder-3',
    link: '/psychotic-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg3,
  },
  {
    key: 'disorder-4',
    link: '/personality-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg4,
  },
  {
    key: 'disorder-5',
    link: '/obsessive-compulsive-related-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg5,
  },
  {
    key: 'disorder-6',
    link: '/post-traumatic-stress-disorder',
    icon: PsychiatricAssessmentMentalHealthDisordersImg6,
  },
  {
    key: 'disorder-7',
    link: '/neuro-developmental-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg7,
  },
  {
    key: 'disorder-8',
    link: '/eating-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg8,
  },
  {
    key: 'disorder-9',
    link: '/substance-use-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg9,
  },
  {
    key: 'disorder-10',
    link: '/sleep-wake-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg10,
  },
  {
    key: 'disorder-11',
    link: '/neurocognitive-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg11,
  },
  {
    key: 'disorder-12',
    link: '/somatic-symptom-and-related-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg12,
  },
  {
    key: 'disorder-13',
    link: '/disruptive-impulse-control-and-conduct-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg13,
  },
  {
    key: 'disorder-14',
    link: '/paraphilic-disorders',
    icon: PsychiatricAssessmentMentalHealthDisordersImg14,
  },
];

const PsychiatricAssessmentMentalHealthDisordersPage = () => {
  return (
    <MultiPathPage
      arrayData={PsychiatricAssessmentMentalHealthDisordersData}
      pageTitle="Psychiatric Assessment & Mental Health Disorders"
      backRoute="/court-hearing"
    />
  );
};

export default PsychiatricAssessmentMentalHealthDisordersPage;