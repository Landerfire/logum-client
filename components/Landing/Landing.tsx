import { Box } from '@chakra-ui/react';
import Carousel from '../Carousel';
import AboutSection from './AboutSection';
import LeavePhoneNumberForm from './LeavePhoneNumberForm';

interface LandingProps {}

const Landing = ({}: LandingProps) => {
  return (
    <Box>
      <Carousel />
      <LeavePhoneNumberForm />
      <AboutSection />
      <p>courses</p>
      <p>feedback with selecting cours</p>
      <p>pros</p>
      <p>feedback with individual consultation</p>
      <p>close ivents</p>
      <p>news/blog</p>
      <p>partners?</p>
      <p>footer</p>
    </Box>
  );
};

export default Landing;
