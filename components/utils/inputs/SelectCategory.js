import Select from 'react-select';
import { SelectFieldContainer } from '../../../styles/utils.styles';
import { TextBase } from '../typography/Typography';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

function SelectCategory() {
  return (
    <SelectFieldContainer>
      <TextBase>main category</TextBase>

      <Select
        defaultValue={colourOptions[0]}
        isClearable={false}
        isSearchable={true}
        name="category"
        options={colourOptions}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: '#f3f3f3',
            borderColor: state.isFocused ? '#f3f3f3' : '#f3f3f3',
            padding: '0.25rem 0.5rem',
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: '0.5rem',
          colors: {
            ...theme.colors,
            primary25: '#f3f3f3',
            primary: '#001433',
            neutral30: '#001433',
          },
        })}
      />
    </SelectFieldContainer>
  );
}

export default SelectCategory;
