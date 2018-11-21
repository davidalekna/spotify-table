import styled from 'styled-components';
import { FlexCol, FlexRow } from '../globals';

export const TableBase = styled(FlexCol)`
  position: relative;
`;

export const TableHead = styled(FlexRow)`
  flex: 0 0 auto;
  height: 46px;
  color: black;
  border-bottom: 1px solid ${({ theme }) => theme.neutral['900']};
  padding: 0 5px;
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
  width: ${({ width }) => `${width}px` || 'auto'};
  flex: ${({ flex }) => flex || '1 1 auto'};

  font-size: 0.75em;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral};
`;

export const TableBody = styled(FlexCol)`
  flex: 1 1 auto;
`;

export const TableBodyRow = styled(FlexRow)`
  flex: 0 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.neutral['900']};
`;

export const TableBodyRowItem = styled(FlexRow)`
  height: 46px;
  width: ${({ width }) => `${width}px` || 'auto'};
  flex: ${({ flex }) => flex || '1 1 auto'};
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
