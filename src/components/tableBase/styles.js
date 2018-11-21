import styled from 'styled-components';
import { FlexCol, FlexRow } from '../globals';

export const TableBase = styled(FlexCol)`
  position: relative;
`;

export const TableHead = styled(FlexRow)`
  flex: 0 0 auto;
  height: 46px;
  color: black;
  border-bottom: 1px solid #ccc;
  padding: 0 5px;
  font-size: 12px;
`;

export const TableHeadRow = styled(FlexRow)`
  flex: 1 1 auto;
  text-transform: uppercase;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeadRowItem = styled(FlexRow)`
  text-transform: uppercase;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const TableBody = styled(FlexCol)`
  flex: 1 1 auto;
  padding: 0 5px;
`;

export const TableBodyRow = styled(FlexRow)`
  flex: 0 0 auto;
  border-bottom: 1px solid #eee;
`;

export const TableBodyRowItem = styled(FlexRow)`
  height: 46px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
