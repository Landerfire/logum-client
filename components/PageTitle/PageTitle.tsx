import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type PageTitleWithContent = {
    content: string;
    children?: never
}

type PageTitleWithChildren = {
  children: string;
  content?: never;
};

type PageTitleProps = PageTitleWithChildren | PageTitleWithContent


const PageTitle = ({children, content}: PageTitleProps) => {
  return (
    <Box bgColor={'green.400'} shadow='md' mt={5} mb={10}>
      <Text fontSize={32} fontWeight={600} textAlign='center' color='white' textShadow={'1px 1px green'}>
        {!children ? content : children}
      </Text>
    </Box>
  );
}

export default PageTitle