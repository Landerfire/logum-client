import { AspectRatio, Box, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { NextPage } from 'next';
import MainLayout from '../components/Layouts/MainLayout';
import SectionLayout from '../components/Layouts/SectionLayout';
import PageTitle from '../components/PageTitle';

const Teachers: NextPage = () => {
  const mapPoint1 =
    'https://yandex.ru/maps/20712/chusovoy/house/ulitsa_50_let_vlksm_11a/YU4YfgZgT0MAQFtifX53eHtrZA==/inside/?ll=57.811097%2C58.269480&tab=inside&utm_medium=mapframe&utm_source=maps&z=19.04';
  const mapPoint2 =
    'https://yandex.ru/maps/20712/chusovoy/house/kommunisticheskaya_ulitsa_2/YU4YcQ5pQUYEQFtifX52d3hlYw==/?ll=57.800243%2C58.275918&utm_medium=mapframe&utm_source=maps&z=18.64';

  const mapHref1 = 'https://yandex.ru/map-widget/v1/-/CCUbAQgowB';
  const mapHref2 = 'https://yandex.ru/map-widget/v1/-/CCUbAUu-PD';
  const [mapPoint, setMapPoint] = useState(mapPoint1);
  const [mapHref, setMapHref] = useState(mapHref1);

  const changeMap = () => {
    setMapPoint(mapPoint2);
    setMapHref(mapHref2)
  };

  return (
    <MainLayout>
      <SectionLayout about='contacts'>
        <PageTitle>Ждем вас в нашем центре!</PageTitle>
        <Box position={'relative'} overflow={'hidden'}>
          <Link
            href='https://yandex.ru/maps/20712/chusovoy/?utm_medium=mapframe&utm_source=maps'
            color={'#eee'}
            fontSize={'12px'}
            position={'absolute'}
            top={0}
          >
            Чусовой
          </Link>
          <Link href={mapPoint} color={'#eee'} fontSize={'12px'} position={'absolute'} top={'14px'}>
            Улица 50 лет ВЛКСМ, 11А — Яндекс Карты
          </Link>
          <AspectRatio maxW='560px' maxH={'400px'} ratio={1} position={'relative'}>
            <iframe
              src={mapHref}
              // width='560'
              // height='400'
              frameBorder='1'
              allowFullScreen={true}
              // style='position:relative;'
            ></iframe>
          </AspectRatio>
        </Box>
        <Box>
          <button type='button' onClick={changeMap}>
            Click
          </button>
        </Box>
      </SectionLayout>
    </MainLayout>
  );
};

export default Teachers;
