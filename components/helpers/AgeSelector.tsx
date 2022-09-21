import { ChangeEvent } from 'react';
import CustomSelect from '../customs/CustomSelect';

interface AgeSelectorProps {
  value: string;
  options: string[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClick: () => void;
}

const AgeSelector = ({ value, options, onChange, onClick }: AgeSelectorProps) => {
  const label = 'Возраст ребёнка';

  return (
    <CustomSelect
      name='age'
      onClick={onClick}
      value={value}
      placeholder={label}
      label={label}
      onChange={onChange}
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option[0].toUpperCase() + option.slice(1).toLowerCase()}
          </option>
        );
      })}
      {/* <option value={options[0]}>До трёх лет</option>
      <option value='3-6 лет'>3-6 лет</option>
      <option value='7-9 лет'>7-9 лет</option>
      <option value='9-11 лет'>9-11 лет</option>
      <option value='12-16 лет'>12-16 лет</option>
      <option value='старше 16 лет'>Старше 16 лет</option> */}
    </CustomSelect>
  );
};

export default AgeSelector;
