import React from 'react';
import NextLink from 'next/link';
import { Link, StyleProps } from '@chakra-ui/react';

interface CustomLinkProps {
  href: string;
  title?: string;
  children?: React.ReactNode;
  style?: StyleProps;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, style, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link cursor='pointer' sx={style}>{!children ? title : children}</Link>
    </NextLink>
  );
};

export default CustomLink;
