import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import { CSSProperties } from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  about: string;
  bgColor?: string;
  style?: CSSProperties | undefined;
}

const SectionLayout = ({ children, about, bgColor, style, ...rest }: SectionLayoutProps) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');


  return (
    <Box as='section' about={about} bgColor={bgColor} sx={style}>
      <Container maxW='container.xl' px={isLargerThan1280 ? '0' : '5'}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionLayout;
