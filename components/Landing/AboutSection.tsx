import { Box, Text, VStack } from '@chakra-ui/react';
import SectionLayout from '../Layouts/SectionLayout';

const AboutSection = () => {
  return (
    <SectionLayout about='about logum' style={{ }} bgColor='lightyellow'>
      <Box pt='14px' pb='30px' textAlign='center'>
        <Text fontSize='32px' mb='14px'>
          Детский, семейный центр «Логум»
        </Text>
        <VStack fontSize='20px' spacing='6'>
          <Text>
            Мы заботимся о гармоничном психологическом и интеллектуальном развитии в воспитании детей. Наш
            центр помогает своевременному созреванию всех психических функций детей от 3 до 18 лет.
          </Text>
          <Text>
            Занятия направлены на развитие внимания, памяти, мышления и навыков общения для дальнейшей
            самореализации ребёнка.
          </Text>
        </VStack>
      </Box>
    </SectionLayout>
  );
};

export default AboutSection;
