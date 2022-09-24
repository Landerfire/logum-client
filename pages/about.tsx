import { NextPage } from 'next'
import React from 'react'
import CustomImage from '../components/customs/CustomImage'
import MainLayout from '../components/Layouts/MainLayout'
import SectionLayout from '../components/Layouts/SectionLayout'
import PageTitle from '../components/PageTitle'

const About: NextPage = () => {
  return (
    <MainLayout>
      <SectionLayout about='Сведения об образовательной организации'>
        <PageTitle>Сведения об образовательной организации</PageTitle>
        <CustomImage
          src={'http://localhost:5000/courses/bba8662c-9919-4765-8d21-7970415de2c0.jpg'}
          width={560}
          height={360}
          rounded='2xl'
        />
      </SectionLayout>
    </MainLayout>
  );
}

export default About