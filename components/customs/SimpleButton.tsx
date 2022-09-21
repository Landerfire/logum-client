import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

interface StylingProps extends ButtonProps {}

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  chakraStyle?: StylingProps;
  isLoading?: boolean;
  onClick?: () => void;
}

const SimpleButton: FC<SimpleButtonProps> = ({ children, onClick, chakraStyle, isLoading, style, ...rest }) => {
  return (
    <Button
      onClick={onClick}
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
