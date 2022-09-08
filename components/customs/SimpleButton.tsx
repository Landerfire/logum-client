import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

interface StylingProps extends ButtonProps {}

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  chakraStyle?: StylingProps;
  isLoading?: boolean;
}

const SimpleButton: FC<SimpleButtonProps> = ({ children, chakraStyle, isLoading, style, ...props }) => {
  return (
    <Button
      colorScheme={chakraStyle?.colorScheme || 'teal'}
      variant={chakraStyle?.variant}
      sx={style}
      borderRadius={'3xl'}
      pb='22px'
      pt='20px'
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};

export default SimpleButton;
