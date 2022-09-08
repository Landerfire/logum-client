import { FormControl, FormHelperText, FormLabel, Input, VisuallyHidden } from '@chakra-ui/react';
import { ChangeEvent, FC, InputHTMLAttributes, useEffect, useState } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({
  name,
  placeholder,
  value,
  type = 'text',
  onChange,
  style,
  ...rest
}) => {
  const [helperTextVisible, setHelperTextVisible] = useState(false);

  useEffect(() => {
    const renderLabel = () => {
      if (value.length > 0) {
        setHelperTextVisible(true);
      } else {
        setHelperTextVisible(false);
      }
    };

    renderLabel();
    return () => {
      renderLabel;
    };
  }, [value]);

  const handleFocus = () => value.length !== 0 && setHelperTextVisible(true);

  const handleBlur = () => setHelperTextVisible(false);

  return (
    <FormControl position='relative' m='5px 0' w='225px' sx={style}>
      <VisuallyHidden>
        <FormLabel htmlFor={name}>{placeholder}</FormLabel>
      </VisuallyHidden>

      <Input
        name={name}
        type={type}
        autoComplete='off'
        placeholder={placeholder + '*'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        bgColor='white'
        borderRadius='3xl'
      />

      {helperTextVisible && (
        <FormHelperText ml='12px' position='absolute' top='35px' color='black' fontSize='16px'>
          {placeholder}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomInput;
