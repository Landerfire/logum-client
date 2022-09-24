import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';


interface ImageWrapperProps extends BoxProps {
  children: React.ReactNode;
}

/** 
 *Wraps the \<CustomImage /> component for more complicated styling
 *or styling that requires a \<div> behind the image, like 'boxShadow'.
 @Position 'relative' by default
**/
const ImageWrapper = ({children, position = 'relative', ...rest}: ImageWrapperProps) => {
  return (
    <Box position={position} {...rest}>
      {children}
    </Box>
  );
}

export default ImageWrapper;