import { NextPage } from 'next'
import MainLayout from '../components/Layouts/MainLayout'
import SectionLayout from '../components/Layouts/SectionLayout'
import PageTitle from '../components/PageTitle'

const Teachers: NextPage = () => {
  return (
    <MainLayout>
      <SectionLayout about='contacts'>
        <PageTitle>Наши контакты</PageTitle>
      </SectionLayout>
    </MainLayout>
  );
}

export default Teachers