import { Box, Center, Container, Flex, HStack, Spacer } from '@chakra-ui/react';
import { FaVk } from 'react-icons/fa';
import CustomLink from '../customs/CustomLink';
import Navbar from '../Navbar';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <Box as='header' fontSize='32px' bgColor='green.300' position='sticky' top='0' zIndex='40' boxShadow='xl'>
      <Container maxW='container.xl' h='45px'>
        <Flex alignItems='center' h='full'>
          <CustomLink href='/'>
            <Box>LOGUM</Box>
          </CustomLink>
          <Spacer />
          <Box>Contacts block</Box>
          <Spacer />
          <HStack>
            <CustomLink href='/'>
              <Center color='white' _hover={{ color: 'blue.600', stroke: 'blue.600' }}>
                <FaVk name='vk' color='currentColor' size={'32px'} />
              </Center>
            </CustomLink>
          </HStack>
        </Flex>
      </Container>

      <Navbar />
    </Box>
  );
};

export default Header;
