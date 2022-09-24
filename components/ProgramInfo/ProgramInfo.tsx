import { Box, HStack, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import { ImSad, ImSmile } from 'react-icons/im';
import { baseURL } from '../../tools/consts';
import { IProgram } from '../../tools/interfaces';
import { mockCoursesArticle } from '../../mock/coursesArticles';
import SimpleButton from '../customs/SimpleButton';

interface ProgramInfoProps {
    program: IProgram
}

const ProgramInfo = ({program}: ProgramInfoProps) => {
  return (
    <Box marginTop={5}>
      <Box bgColor={'green.400'} marginBottom={5} shadow='md'>
        <Text fontSize={28} textAlign='center' color='white' textShadow={'1px 1px green'}>
          {program.name}
        </Text>
      </Box>

      <Box display={'grid'} gridTemplateColumns='1fr 1fr' gridGap={5} marginBottom={5}>
        <Image src={baseURL + program.thumbnail} alt={program.name} width={500} height={400}></Image>
        <Box display={'flex'} flexDirection='column' justifyContent={'space-between'}>
          <Text whiteSpace={'pre-line'}>{mockCoursesArticle.shortDescription}</Text>
          <List spacing={0.5}>
            <Text fontSize={18} mb={1}>
              Кому подходит этот курс:
            </Text>
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

      <Box height='4px' width='70%' backgroundColor='green.400' marginBottom={5} shadow='md'></Box>

      <Box marginBottom={5}>
        <Text fontSize={18}>{mockCoursesArticle.schedule}</Text>
        {program.durationInMinutes && (
          <HStack>
            <Text as={'b'}>Продолжительность одного занятия: </Text>
            <Text>{program.durationInMinutes} минут</Text>
          </HStack>
        )}
        {program.price && (
          <HStack>
            <Text as={'b'}>Стоимость: </Text>
            <Text>{program.price} руб.</Text>
          </HStack>
        )}
        {program.numberOfLessons && (
          <HStack>
            <Text as={'b'}>Количество занятий: </Text>
            <Text>{program.numberOfLessons}</Text>
          </HStack>
        )}
      </Box>

      <Box height='4px' width='35%' backgroundColor='green.400' marginBottom={5} shadow='md'></Box>

      <Box mb={5}>
        <Text mb={5}>{mockCoursesArticle.fullDescription}</Text>
        <List spacing={0.5}>
          <Text fontSize={18} mb={1}>
            Результаты уже через 4 месяца обучения:
          </Text>
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

      <Box height='10vh'>
        <SimpleButton chakraStyle={{colorScheme: 'green'}}>Записаться на курс</SimpleButton>
      </Box>
    </Box>
  );
}

export default ProgramInfo