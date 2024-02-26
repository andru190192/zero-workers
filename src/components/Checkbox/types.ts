export interface Country {
  id: number;
  name: string;
}

export interface CheckBoxProps {
  label: string;
  value: number;
  selectedItems?: any[];
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}