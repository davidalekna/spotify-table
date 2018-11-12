import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../components/globals';

export const Wrapper = styled.div`
  grid-area: main;
  overflow-x: auto;
  background: linear-gradient(
    to bottom,
    rgba(57, 57, 57, 0.8),
    rgba(23, 23, 23, 1) 30%
  );
`;

export const Header = styled(FlexRow)`
  flex: 0 0 auto;
  height: 60px;
  border: 1px dashed red;
`;

export const Preview = styled(FlexRow)`
  flex: 0 0 auto;
  height: 280px;
  border: 1px dashed red;
`;

export const Table = styled(FlexCol)`
  flex: 1 1 auto;
  height: 100%;
  border: 1px dashed orange;
`;
