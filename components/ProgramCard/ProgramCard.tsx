import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { baseURL } from '../../tools/consts'
import { IProgram } from '../../tools/interfaces'
import CustomLink from '../customs/CustomLink'

interface ProgramCardProps {
    program: IProgram
}

const ProgramCard = ({program}: ProgramCardProps) => {
  return (
    <Box marginBottom={5} boxShadow='1px 1px 10px lightgray' p={4}>
      <Box>
        <CustomLink key={program.id} href={`programs/${program.id}`}>
          <Image src={baseURL + program.thumbnail} alt={program.name} width={400} height={300}></Image>
          <Text fontSize={24} mb={2}>
            {program.name}
          </Text>
        </CustomLink>
        <Text fontSize={16} mb={5}>
          {program.description}
        </Text>
        <CustomLink key={program.id} href={`programs/${program.id}`}>
          <Text fontSize={14} fontWeight={600}>
            Подробнее
          </Text>
        </CustomLink>
      </Box>
    </Box>
  );
}

export default ProgramCard