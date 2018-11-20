import styled from 'styled-components';
import { FlexCol } from '../../components/globals';

export const Wrapper = styled(FlexCol)`
  grid-area: friends;
  background: ${({ theme }) => theme.neutral['800']};

  @media (max-width: 1100px) {
    display: none;
  }
`;
