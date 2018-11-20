import styled from 'styled-components';
import { FlexCol } from '../../components/globals';

export const Wrapper = styled(FlexCol)`
  grid-area: sidebar;
  background: ${({ theme }) => theme.neutral['800']};
`;
