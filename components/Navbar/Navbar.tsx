import { HStack } from '@chakra-ui/react';
import React from 'react';
import CustomLink from '../customs/CustomLink';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <HStack
      as='nav'
      h='36px'
      bgColor='green.400'
      fontSize={[10, 12, 14, 18, 20]}
      justifyContent='center'
      spacing={[4, 4, 5, 10, 10]}
      px='5'
      textAlign='center'
    >
      <CustomLink href='/' title='Главная' />
      <CustomLink href='/programs' title='Образовательные программы' />
      <CustomLink href='/about' title='Сведения об образовательной организации' />
      <CustomLink href='/contacts' title='Наши контакты' />
    </HStack>
  );
};

export default Navbar;
