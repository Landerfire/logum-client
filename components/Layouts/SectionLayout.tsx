import { Box, Container, StyleProps } from '@chakra-ui/react';
import { CSSProperties } from 'react';

interface SectionLayoutProps {
  about: string;
  bgColor?: string;
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}

const SectionLayout = ({ children, about, bgColor, style, ...rest }: SectionLayoutProps) => {
  return (
    <Box as='section' about={about} bgColor={bgColor} sx={style}>
      <Container maxW='container.xl' px='0'>
        {children}
      </Container>
    </Box>
  );
};

export default SectionLayout;
