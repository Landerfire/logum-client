import { HStack } from '@chakra-ui/react';
import React from 'react';
import CustomLink from '../customs/CustomLink';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <HStack as='nav' h='40px' bgColor='green.400' fontSize={24} justifyContent='center' spacing={10}>
      <CustomLink href='/' title='Home' />
      <CustomLink href='/programs' title='Courses' />
      <CustomLink href='/teachers' title='Teachers' />
      <CustomLink href='/about' title='About' />
    </HStack>
  );
};

export default Navbar;
