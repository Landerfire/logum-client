import {
  FormControl,
  FormHelperText,
  FormLabel, Select,
  VisuallyHidden
} from '@chakra-ui/react';
import { ChangeEvent, CSSProperties, useState } from 'react';

interface CustomSelectProps {
  children: React.ReactNode;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  style?: CSSProperties;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClick: () => void;
}

const CustomSelect = ({
  children,
  placeholder,
  value = '',
  onChange,
  onClick,
  name,
  label,
  style,
  ...rest
}: CustomSelectProps) => {
  // const [selectPlaceholder, setSelectPlaceholder] = useState(placeholder ? placeholder : label);
  const [displayLabel, setDisplayLabel] = useState(false)

  // const handleFocus = () => {
  //   if (!displayLabel) {
  //     setSelectPlaceholder('');
  //     setDisplayLabel(true);
  //   }
  // };

  return (
    <FormControl position='relative' w='225px' sx={style}>
      <VisuallyHidden>
        <FormLabel htmlFor={name}>{label}</FormLabel>
      </VisuallyHidden>

      <Select
        name={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={value === '' ? label : ''}
        sx={style}
        bgColor='white'
        width='225px'
        borderRadius='3xl'
      >
        {children}
      </Select>

      {value && (
        <FormHelperText ml='12px' position='absolute' top='35px' color='black' fontSize='16px'>
          {label}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;
