import { Box, Text } from '@chakra-ui/react'
import { baseURL } from '../../tools/consts'
import { IProgram } from '../../tools/interfaces'
import CustomImage from '../customs/CustomImage'
import CustomLink from '../customs/CustomLink'

interface ProgramItemProps {
    program: IProgram
}

const ProgramItem = ({program}: ProgramItemProps) => {
  return (
    <Box marginBottom={5} boxShadow='1px 1px 10px lightgray' p={4} display='flex' flexDirection={'column'} bgColor='gray.100' rounded={'5%'}>
      <CustomLink href={`programs/${program.id}`}>
        <CustomImage
          src={baseURL + program.thumbnail}
          alt={program.name}
          width={400}
          height={300}
          rounded='5%'
        />
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

      <CustomLink href={`programs/${program.id}`} marginTop='auto'>
        <Text fontSize={14} fontWeight={600}>
          Подробнее {'>>'}
        </Text>
      </CustomLink>
    </Box>
  );
}

export default ProgramItem