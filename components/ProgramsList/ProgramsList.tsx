import { Box, Text } from '@chakra-ui/react';
import { IProgram } from '../../tools/interfaces';
import ProgramCard from '../ProgramCard';

interface ProgramsListProps {
  programs: IProgram[];
}

const ProgramsList = ({ programs }: ProgramsListProps) => {
  return (
    <Box height='100%' marginTop={5} display='grid' gridGap={5} gridTemplateColumns='1fr 1fr 1fr'>
      {programs!.map((program) => {
        return (
            <ProgramCard key={program.id} program={program} />
        );
      })}
    </Box>
  );
};

export default ProgramsList;
