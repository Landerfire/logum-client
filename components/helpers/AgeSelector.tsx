import { ChangeEvent } from 'react';
import CustomSelect from '../customs/CustomSelect';

interface AgeSelectorProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const AgeSelector = ({ value, onChange }: AgeSelectorProps) => {
  return (
    <CustomSelect name='age' value={value} label='Возраст ребёнка' onChange={onChange}>
      <option value='До трёх лет'>До трёх лет</option>
      <option value='3-6 лет'>3-6 лет</option>
      <option value='7-9 лет'>7-9 лет</option>
      <option value='9-11 лет'>9-11 лет</option>
      <option value='12-16 лет'>12-16 лет</option>
      <option value='старше 16 лет'>Старше 16 лет</option>
    </CustomSelect>
  );
};

export default AgeSelector;
