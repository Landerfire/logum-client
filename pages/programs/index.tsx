import { GetStaticProps, NextPage } from 'next';
import MainLayout from '../../components/Layouts/MainLayout';
import SectionLayout from '../../components/Layouts/SectionLayout';
import PageTitle from '../../components/PageTitle';
import ProgramsList from '../../components/ProgramsList';
import { baseURL } from '../../tools/consts';
import { IProgram } from '../../tools/interfaces';

interface ProgramsPageProps {
  programs: IProgram[];
}

const Programs: NextPage<ProgramsPageProps> = ({ programs }) => {
  return (
    <MainLayout>
      <SectionLayout about='Список образовательных программ'>
        <PageTitle>Наши образовательные программы</PageTitle>
        <ProgramsList programs={programs} />
      </SectionLayout>
    </MainLayout>
  );
};

export default Programs;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(baseURL + 'api/programs');
  const programs: IProgram[] = await response.json();

  return {
    props: {
      programs,
    },
  };
};
