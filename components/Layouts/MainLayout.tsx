import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../Header';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const MainLayout = ({ title = 'ЛОГУМ', children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Logum Логум Психологический Логопедический Центр Чусовой Курильчик Психолог Логопед'
        />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <title>{title}</title>
      </Head>

      <Header />

      <Box as='main' /* bgImage='/bg.jpg' */>
        {children}
      </Box>

      <footer></footer>
    </>
  );
};

export default MainLayout;
