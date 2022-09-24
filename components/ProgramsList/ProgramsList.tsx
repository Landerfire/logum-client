import { Box } from '@chakra-ui/react';
import { IProgram } from '../../tools/interfaces';
import ProgramItem from '../ProgramItem';

interface ProgramsListProps {
  programs: IProgram[];
}

const ProgramsList = ({ programs }: ProgramsListProps) => {
  return (
    <Box height='100%' marginTop={5} display='grid' gridGap={5} gridTemplateColumns='1fr 1fr 1fr'>
      {programs!.map((program) => {
        return <ProgramItem key={program.id} program={program} />;
      })}
    </Box>
  );
};

export default ProgramsList;
