import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

export const BlockLink = styled(NavLink).attrs(({ theme }) => ({
  // NOTE: theme not accessable yet but commit has been merge, wait for next version
  activeStyle: {
    fontWeight: 'bold',
    color: '#57b560',
    // color: theme.accents.feature['600'],
  },
}))`
  font-size: 0.85em;
  font-weight: 600;
  padding: 5px 20px;
  color: ${({ theme }) => theme.neutral};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// .attrs({
//   activeStyle: ({ theme }) => ({
//     fontWeight: 'bold',
//     color: theme.accents.feature['600'],
//   }),
// })`
//   font-size: 0.85em;
//   font-weight: 600;
//   padding: 5px 20px;
//   color: ${({ theme }) => theme.neutral};
//   cursor: pointer;

//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
// `;
