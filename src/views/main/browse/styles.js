import styled from 'styled-components';
import { FlexCol, FlexRow } from 'src/components/globals';

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
`;

export const WrapperGradiant = styled.div`
  height: 100%;
  padding: 0 40px;
  background: linear-gradient(
    to bottom,
    rgba(62, 62, 62, 1),
    rgba(23, 23, 23, 1) 40%
  );
`;
