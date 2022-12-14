import { Box, chakra, ImageProps } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type CustomImageType = NextImageProps & ImageProps;

interface CustomImageProps extends CustomImageType {}

/**
 * NextJS Image with styling capabilities from CharkaUI.
 *
 * Wrap this component with parent component using position="relative" or \<ImageWrapper> component
 *  for more complicated styling or styling that requires a \<div> behind the image
 */
const CustomImage = ({ src, alt, width, height, layout, ...rest }: CustomImageProps) => {
    const Image = chakra(NextImage, {
      shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
    });

  return <Image src={src} alt={alt} width={width} height={height} layout={layout} {...rest} />;
};

export default CustomImage;