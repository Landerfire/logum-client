import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { baseURL } from '../../tools/consts'
import { IProgram } from '../../tools/interfaces'
import CustomLink from '../customs/CustomLink'

interface ProgramItemProps {
    program: IProgram
}

const ProgramItem = ({program}: ProgramItemProps) => {
  return (
    <Box marginBottom={5} boxShadow='1px 1px 10px lightgray' p={4}>
      <CustomLink href={`programs/${program.id}`}>
        <Image
          src={baseURL + program.thumbnail}
          alt={program.name}
          width={400}
          height={300}
          style={{ borderRadius: '5%' }}
        ></Image>
        <Text fontSize={26} my={1}>
          {program.name}
        </Text>

        {program.minAge && program.maxAge && (
          <Text fontSize={18} fontStyle={'italic'} mb={2}>
            {program.minAge}-{program.maxAge} лет
          </Text>
        )}
      </CustomLink>

      <Text
        sx={{ display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
        fontSize={16}
        mb={5}
      >
        {program.description}
      </Text>

      <CustomLink href={`programs/${program.id}`}>
        <Text fontSize={14} fontWeight={600}>
          Подробнее
        </Text>
      </CustomLink>
    </Box>
  );
}

export default ProgramItem