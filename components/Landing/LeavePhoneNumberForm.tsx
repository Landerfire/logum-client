import { Flex, FormControl, HStack, Text, VStack } from '@chakra-ui/react';
import { FC, useState } from 'react';
import CustomInput from '../customs/CustomInput';
import SimpleButton from '../customs/SimpleButton';
import AgeSelector from '../helpers/AgeSelector';
import SectionLayout from '../Layouts/SectionLayout';

interface FeedbackProps {}

const Feedback: FC<FeedbackProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  const phoneInputChange = (value: string) => {
    const regPhone = '[0-9]+';
    let validatedValue = value;

    setPhone(validatedValue);
  };

  const handleAgeSelectorChange = (value: string) => setAge(value);

  return (
    <SectionLayout about='leave phone number' bgColor='lightgray' style={{}}>
      <Flex h='100%' py='14px' flexDir='column' alignItems='center' justifyContent='center'>
        <FormControl as='form'>
          <VStack textAlign='center' mb='28px'>
            <Text fontSize='28px'>Записаться на бесплатное ознакомительное занятие в «Логум»</Text>
            <Text fontSize='20px'>Оставьте нам ваше имя и ваш номер телефона. Мы вам перезвоним.</Text>
          </VStack>
          <HStack justifyContent='center' spacing='24px' mb='40px' flexWrap='wrap'>
            <CustomInput
              name={'userName'}
              value={name}
              placeholder='Ваше имя'
              onChange={(e) => setName(e.target.value)}
            />
            <CustomInput
              name='phone'
              value={phone}
              type='tel'
              placeholder='Ваш телефон'
              onChange={(e) => phoneInputChange(e.target.value)}
            />
            <AgeSelector value={age} onChange={(e) => handleAgeSelectorChange(e.target.value)} />

            <SimpleButton chakraStyle={{ colorScheme: 'green' }} style={{ width: '120px' }}>
              Записаться
            </SimpleButton>
          </HStack>
          <Text textAlign='center' fontSize='16px'>
            *Отправляя форму, Вы соглашаетесь с условиями Политики обработки персональных данных.
          </Text>
        </FormControl>
      </Flex>
    </SectionLayout>
  );
};

export default Feedback;
