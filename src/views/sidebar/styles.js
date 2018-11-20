import styled from 'styled-components';
import { FlexCol } from '../../components/globals';
import { H4 } from 'src/components/globals';

export const Wrapper = styled(FlexCol)`
  grid-area: sidebar;
  background: ${({ theme }) => theme.neutral['800']};
  user-select: none;
`;

export const BlockHeading = styled(H4)`
  padding: 5px 20px;
  text-transform: uppercase;
  cursor: default;
`;

export const Block = styled.ul`
  list-style: none;
  margin: 10px 0;
`;

export const BlockItem = styled.li`
  font-size: 0.9em;
  font-weight: 600;
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
