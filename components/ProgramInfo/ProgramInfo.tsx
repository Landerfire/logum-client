import { Box, List, ListIcon, ListItem, Text, useMediaQuery } from '@chakra-ui/react';
import { ImSad, ImSmile } from 'react-icons/im';
import { mockCoursesArticle } from '../../mock/coursesArticles';
import { baseURL } from '../../tools/consts';
import { IProgram } from '../../tools/interfaces';
import CustomImage from '../customs/CustomImage';
import ImageWrapper from '../customs/ImageWrapper';
import SimpleButton from '../customs/SimpleButton';

interface ProgramInfoProps {
    program: IProgram
}

const ProgramInfo = ({program}: ProgramInfoProps) => {
  const [isLargerThan1280] = useMediaQuery(['(min-width: 1280px)']);
  const [isLargerThan1024] = useMediaQuery(['(min-width: 1024px)']);


  return (
    <Box marginTop={5}>
      <Box bgColor={'green.400'} marginBottom={5} shadow='md'>
        <Text fontSize={28} textAlign='center' color='white' textShadow={'1px 1px green'}>
          {program.name}
        </Text>
      </Box>

      <Box
        display={isLargerThan1024 ? 'grid' : 'flex'}
        gridTemplateColumns='1fr 1fr'
        gridGap={5}
        marginBottom={5}
      >
        {isLargerThan1024 && (
          <ImageWrapper boxShadow='lg'>
            <CustomImage src={baseURL + program.thumbnail} alt={program.name} layout='fill' />
          </ImageWrapper>
        )}
        <Box display={'flex'} flexDirection='column' justifyContent={'space-between'}>
          <Text whiteSpace={'pre-line'} marginBottom={isLargerThan1280 ? '1' : '5'}>
            {mockCoursesArticle.shortDescription}
          </Text>
          <Box display={isLargerThan1024 ? 'box' : 'grid'} gridTemplateColumns='1fr 1fr'>
            <ImageWrapper boxShadow='lg' mr='5'>
              <CustomImage src={baseURL + program.thumbnail} alt={program.name} layout='fill' />
            </ImageWrapper>
            <List spacing={0.5}>
              <Text fontSize={18}>Кому подходит этот курс:</Text>
              {mockCoursesArticle.problems.map((problem, index) => {
                return (
                  <ListItem pl={3} key={index}>
                    <ListIcon as={ImSad} color='red.500' />
                    {problem}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Box>

      <Box height='4px' width='70%' backgroundColor='green.400' marginBottom={5} shadow='md'></Box>

      <Box marginBottom={5}>
        <Text fontSize={18}>{mockCoursesArticle.schedule}</Text>
        {program.durationInMinutes && (
          <Text fontWeight={'bold'}>
            Продолжительность одного занятия:{' '}
            <Text fontWeight={'normal'} as={'span'}>
              {program.durationInMinutes} минут
            </Text>
          </Text>
        )}
        {program.price && (
          <Text fontWeight={'bold'}>
            Стоимость:{' '}
            <Text fontWeight={'normal'} as='span'>
              {program.price} руб.
            </Text>
          </Text>
        )}
        {program.numberOfLessons && (
          <Text fontWeight={'bold'}>
            Количество занятий:{' '}
            <Text fontWeight={'normal'} as='span'>
              {program.numberOfLessons}
            </Text>
          </Text>
        )}
      </Box>

      <Box height='4px' width='35%' backgroundColor='green.400' marginBottom={5} shadow='md'></Box>

      <Box mb={5}>
        <Text mb={5}>{mockCoursesArticle.fullDescription}</Text>
        <List spacing={0.5}>
          <Text fontSize={18}>Результаты уже через 4 месяца обучения:</Text>
          {mockCoursesArticle.results.map((result, index) => {
            return (
              <ListItem pl={3} key={index}>
                <ListIcon as={ImSmile} color='green.500' />
                {result}
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box height='10vh' width='100%' display='flex' justifyContent='center' alignItems='center'>
        <SimpleButton chakraStyle={{ colorScheme: 'green' }}>Записаться на курс</SimpleButton>
      </Box>
    </Box>
  );
}

export default ProgramInfo