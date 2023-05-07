import { ButtonComponentProps } from './props';
import { Button, Title } from './styles';

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, ...rest }) => {
  return (
    <Button {...rest}>
      <Title>{title}</Title>
    </Button>
  );
};
