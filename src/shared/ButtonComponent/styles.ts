import { Button as ButtonAntd, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const Button = styled(ButtonAntd)`
  width: 100%;
  height: 60px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  text-align: center;

  color: #ffffff;
`;
