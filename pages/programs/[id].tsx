import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import MainLayout from '../../components/Layouts/MainLayout';
import SectionLayout from '../../components/Layouts/SectionLayout';
import { baseURL } from '../../tools/consts';
import { IProgram } from '../../tools/interfaces';
import ProgramInfo from '../../components/ProgramInfo';
import Error from 'next/error';

interface ProgramPageProps {
  program: IProgram;
}

const Program = ({ program }: ProgramPageProps) => {
  const { course, description, results, problems } = program;

  const router = useRouter();
  // console.log(program)

  return (
    <MainLayout>
      <SectionLayout about='coursePage'>
        <ProgramInfo course={course} description={description} results={results} problems={problems} />
      </SectionLayout>
    </MainLayout>
  );
};

export default Program;

interface serverSideProps {
  props: {
    program: IProgram;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }): Promise<serverSideProps> => {
  const response = await fetch(`${baseURL}api/programs/${params!.id}`);
  const program: IProgram = await response.json();

  return {
    props: {
      program,
    },
  };
};
