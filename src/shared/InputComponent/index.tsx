import { InputComponentProps } from './props';
import { BoxInput, Input, Label } from './styles';

export const InputComponent: React.FC<InputComponentProps> = ({ label, ...rest }) => {
  return (
    <BoxInput>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </BoxInput>
  );
};
