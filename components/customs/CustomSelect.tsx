import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  position,
  Select,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { CSSProperties, useState, ChangeEvent } from 'react';

interface CustomSelectProps {
  children: React.ReactNode;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  style?: CSSProperties;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect = ({
  children,
  placeholder = '',
  value = '',
  onChange,
  name,
  label,
  style,
  ...rest
}: CustomSelectProps) => {
  const [selectPlaceholder, setSelectPlaceholder] = useState(placeholder ? placeholder : label);

  const handleFocus = () => {
    setSelectPlaceholder('');
  };

  return (
    <FormControl position='relative' w='225px' sx={style}>
      <VisuallyHidden>
        <FormLabel htmlFor={name}>{label}</FormLabel>
      </VisuallyHidden>

      <Select
        name={name}
        value={value}
        onChange={onChange}
        placeholder={selectPlaceholder}
        sx={style}
        onFocus={handleFocus}
        bgColor='white'
        width='225px'
        borderRadius='3xl'
      >
        {children}
      </Select>

      {value !== selectPlaceholder && value !== '' && (
        <FormHelperText ml='12px' position='absolute' top='35px' color='black' fontSize='16px'>
          {label}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;
