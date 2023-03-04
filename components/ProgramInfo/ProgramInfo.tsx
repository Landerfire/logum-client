import { Box, List, ListIcon, ListItem, Text, useMediaQuery } from '@chakra-ui/react';
import Error from 'next/error';
import { ImSad, ImSmile } from 'react-icons/im';
// import { description } from '../../mock/coursesArticles';
import { baseURL } from '../../tools/consts';
import { ICourse, IDescrption, IProblems, IResults } from '../../tools/interfaces';
import CustomImage from '../customs/CustomImage';
import ImageWrapper from '../customs/ImageWrapper';
import SimpleButton from '../customs/SimpleButton';

interface ProgramInfoProps {
  course: ICourse;
  description: IDescrption;
  results: IResults[];
  problems: IProblems[];
}

const ProgramInfo = ({ course, description, problems, results }: ProgramInfoProps) => {
  const [isLargerThan1280] = useMediaQuery(['(min-width: 1280px)']);
  const [isLargerThan1024] = useMediaQuery(['(min-width: 1024px)']);

  if (!course || !description) {
    return <Error statusCode={404} />
  }

  return (
    <Box marginTop={5}>
      <Box bgColor={'green.400'} marginBottom={5} shadow='md'>
        <Text fontSize={28} textAlign='center' color='white' textShadow={'1px 1px green'}>
          {course.name}
        </Text>
      </Box>

      <Box
        display={isLargerThan1024 ? 'grid' : 'flex'}
        gridTemplateColumns='1fr 1fr'
        gridGap={5}
        marginBottom={5}
        height={'50vh'}
      >
        {isLargerThan1024 && (
          <ImageWrapper boxShadow='lg'>
            <CustomImage src={baseURL + course.thumbnail} alt={course.name} layout='fill' />
          </ImageWrapper>
        )}
        <Box display={'flex'} flexDirection='column' justifyContent={'space-between'}>
          <Text whiteSpace={'pre-line'} marginBottom={isLargerThan1280 ? '1' : '5'}>
            {description&& description.aboutCourse}
          </Text>
          <Box display={isLargerThan1024 ? 'box' : 'grid'} gridTemplateColumns='1fr 1fr'>
            <ImageWrapper boxShadow='lg' mr='5'>
              <CustomImage src={baseURL + course.thumbnail} alt={course.name} layout='fill' />
            </ImageWrapper>
            <List spacing={0.5}>
              <Text fontSize={18}>Кому подходит этот курс:</Text>
              {problems &&
                problems.map((problem) => {
                  return (
                    <ListItem pl={3} key={problem.id}>
                      <ListIcon as={ImSad} color='red.500' />
                      {problem.text}
                    </ListItem>
                  );
                })}
            </List>
          </Box>
        </Box>
      </Box>

      <Box height='4px' width='70%' backgroundColor='green.400' marginBottom={5} shadow='md'></Box>

      <Box marginBottom={5}>
        <Text fontSize={18}>{description && description.schedule}</Text>
        {course.durationInMinutes && (
          <Text fontWeight={'bold'}>
            Продолжительность одного занятия:{' '}
            <Text fontWeight={'normal'} as={'span'}>
              {course.durationInMinutes} минут
            </Text>
          </Text>
        )}
        {course.price && (
          <Text fontWeight={'bold'}>
            Стоимость:{' '}
            <Text fontWeight={'normal'} as='span'>
              {course.price} руб.
            </Text>
          </Text>
        )}
        {course.numberOfLessons && (
          <Text fontWeight={'bold'}>
            Количество занятий:{' '}
            <Text fontWeight={'normal'} as='span'>
              {course.numberOfLessons}
            </Text>
          </Text>
        )}
      </Box>

      <Box height='4px' width='35%' backgroundColor='green.400' marginBottom={5} shadow='md'></Box>

      <Box mb={5}>
        <Text mb={5}>{description && description.fullDescription}</Text>
        <List spacing={0.5}>
          <Text fontSize={18}>Результаты уже через 4 месяца обучения:</Text>
          {results &&
            results.map((result) => {
              return (
                <ListItem pl={3} key={result.id}>
                  <ListIcon as={ImSmile} color='green.500' />
                  {result.text}
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
};

export default ProgramInfo;
