import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCol } from '../../components/globals';
import { H4 } from 'src/components/globals';

export const Wrapper = styled(FlexCol)`
  grid-area: sidebar;
  background: ${({ theme }) => theme.neutral['800']};
  user-select: none;
  overflow-x: auto;
`;

export const BlockHeading = styled(H4)`
  padding: 5px 20px;
  font-size: 0.8em;
  text-transform: uppercase;
  cursor: default;
`;

export const Block = styled(FlexCol)`
  list-style: none;
  margin: 10px 0;
`;

export const BlockLink = styled(Link)`
  font-size: 0.85em;
  font-weight: 600;
  padding: 5px 20px;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
