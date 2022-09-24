import { Box, useMediaQuery } from '@chakra-ui/react';
import { IProgram } from '../../tools/interfaces';
import ProgramItem from '../ProgramItem';

interface ProgramsListProps {
  programs: IProgram[];
}

const ProgramsList = ({ programs }: ProgramsListProps) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)');

  return (
    <>
      <Box
        height='100%'
        display={isLargerThan680 ? 'grid' : 'flex'}
        flexDirection='column'
        textAlign={'center'}
        gridGap={5}
        gridTemplateColumns={isLargerThan1024 ? '1fr 1fr 1fr' : '1fr 1fr'}
      >
        {programs!.map((program) => {
          return <ProgramItem key={program.id} program={program} />;
        })}
      </Box>
    </>
  );
};

export default ProgramsList;
