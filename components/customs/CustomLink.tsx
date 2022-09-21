import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { LinkHTMLAttributes } from 'react';

interface CustomLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
  title?: string;
  children?: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, style, children, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <Link cursor='pointer' sx={style} style={{textDecoration: 'none'}}>
        {!children ? title : children}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
