import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

import { ButtonComponent } from '../../shared/ButtonComponent';
import { InputComponent } from '../../shared/InputComponent';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
  width: 202px;
  margin-bottom: 32px;
`;

export const ContainerLogin = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #d9d9d9;

  width: 100%;
  height: 100vh;

  max-width: 646px;
`;

export const LimitedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 498px;

  justify-content: center;
  align-items: center;
`;

export const UserInput = styled(InputComponent)`
  margin-bottom: 32px;
`;

export const PasswordInput = styled(InputComponent)`
  margin-bottom: 64px;
`;

export const TitleLogin = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: center;

  color: #006397;
  margin-bottom: 27px;
`;

export const SubmitButton = styled(ButtonComponent)`
  margin-bottom: 16px;
`;
