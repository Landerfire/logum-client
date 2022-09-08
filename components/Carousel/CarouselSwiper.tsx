import { Box } from '@chakra-ui/react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const mock = {
  images: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1661697522375-7523782821b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'diner table',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1661698049424-8a27a15f4072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'lone island',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1661753222046-575fa62e7d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'ship',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1661765697580-be9f8e39bc06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'lone tree',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1657299170937-3c87404f01c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'people',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1661769212734-67877c79deff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      alt: 'tiger',
    },
  ],
};

interface CarouselProps {}

const CarouselSwiper = ({}: CarouselProps) => {
  return (
    <Box height='60vh'>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        // spaceBetween={50}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: '100%' }}
      >
        {mock.images.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image src={item.image} alt={item.alt} layout='fill' />5
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default CarouselSwiper;
