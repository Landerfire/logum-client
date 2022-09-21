import { Box } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import MainLayout from '../../components/Layouts/MainLayout';
import SectionLayout from '../../components/Layouts/SectionLayout';
import { baseURL } from '../../tools/consts';
import { IProgram } from '../../tools/interfaces';

interface ProgramPageProps {
  program: IProgram
}

const Program: NextPage<ProgramPageProps> = ({program}) => {
  const router = useRouter();

  return (
    <MainLayout>
      <SectionLayout about='coursePage'>
        <Box marginTop={5}>Course: {program.id}</Box>
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
  const response = await fetch(`${baseURL}/api/programs/${params!.id}`);
  const program: IProgram = await response.json();

  return {
    props: {
      program
    },
  };
};
