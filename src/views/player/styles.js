import styled from 'styled-components';
import { FlexCol } from '../../components/globals';

export const Wrapper = styled(FlexCol)`
  grid-area: player;
  background: ${({ theme }) => theme.neutral['900']};
  z-index: 99;
  padding: 10px;
`;
