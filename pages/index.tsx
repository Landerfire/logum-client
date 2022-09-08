import type { NextPage } from 'next';
import Landing from '../components/Landing';
import MainLayout from '../components/Layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Landing />
    </MainLayout>
  );
};

export default Home;
