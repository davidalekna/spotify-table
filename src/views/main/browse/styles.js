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
  border: 1px dashed orange;
`;

export const WrapperGradiant = styled.div`
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(62, 62, 62, 1) 30%,
    rgba(23, 23, 23, 1),
    rgba(23, 23, 23, 1)
  );
`;
