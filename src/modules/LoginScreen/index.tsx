import {
  BackgroundImage,
  Container,
  ContainerLogin,
  Input,
  LimitedContainer,
  LogoImage,
} from './styles';

export const LoginScreen: React.FC = () => {
  return (
    <Container>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input label="Usuário" />
          <Input label="Senha" />
        </LimitedContainer>
      </ContainerLogin>
    </Container>
  );
};
