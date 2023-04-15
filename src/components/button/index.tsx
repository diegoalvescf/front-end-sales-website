import React from 'react';

import { ButtonProps } from './props';
import { Container, Title } from './styles';

export const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = 'button',
  className,
}) => {
  return (
    <Container onClick={onClick} type={type} className={className}>
      <Title>{title}</Title>
    </Container>
  );
};
