import {
  BackgroundImage,
  Container,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  PasswordInput,
  SubmitButton,
  TitleLogin,
  UserInput,
} from './styles';

export const LoginScreen: React.FC = () => {
  return (
    <Container>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />

          <TitleLogin>LOGIN</TitleLogin>

          <UserInput label="Usuário" />

          <PasswordInput label="Senha" />

          <SubmitButton title="ENTRAR" type="primary" />
        </LimitedContainer>
      </ContainerLogin>
    </Container>
  );
};
