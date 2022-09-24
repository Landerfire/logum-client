import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type CustomLinkType = NextLinkProps & LinkProps

interface CustomLinkProps extends CustomLinkType {
  title?: string;
  children?: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, children, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink cursor='pointer' _hover={{ textDecoration: 'none' }} {...rest}>
        {!children ? title : children}
      </ChakraLink>
    </NextLink>
  );
};

export default CustomLink;
