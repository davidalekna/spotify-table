import React from 'react';
import DataBrowser, { getObjectPropertyByString } from 'react-data-browser';
import columns from './components/columns';
import fieldReducer from './components/fieldReducer';
import { sort } from 'ramda';
import { WrapperGradiant, Header, Preview, Table } from './styles';
import {
  TableBase,
  TableHead,
  TableHeadRow,
  TableHeadRowItem,
  TableBody,
  TableBodyRow,
  TableBodyRowItem,
} from 'src/components/tableBase/styles';

const Browse = ({ data = [{}, {}, {}], fixedWidth = 40 }) => (
  <WrapperGradiant>
    <Header>header</Header>
    <Preview>preview</Preview>
    <Table>
      <DataBrowser
        initialColumnFlex={[
          '1 1 40%',
          '0 0 15%',
          '0 0 15%',
          '0 0 15%',
          '0 0 15%',
        ]}
        columns={columns}
      >
        {({ columnFlex, visibleColumns, defaultSortMethod }) => (
          <TableBase>
            <TableHead>
              <TableHeadRow>
                <TableHeadRowItem width={fixedWidth} flex="0 0 auto" />
                <TableHeadRowItem width={fixedWidth} flex="0 0 auto" />
                {visibleColumns.map((cell, index) => (
                  <TableHeadRowItem
                    key={index}
                    style={{ flex: columnFlex[index] }}
                  >
                    {cell.label}
                  </TableHeadRowItem>
                ))}
              </TableHeadRow>
            </TableHead>
            <TableBody>
              {sort(defaultSortMethod, data).map((row, key) => (
                <TableBodyRow key={key}>
                  <TableBodyRowItem width={fixedWidth} flex="0 0 auto">
                    play
                  </TableBodyRowItem>
                  <TableBodyRowItem width={fixedWidth} flex="0 0 auto">
                    +
                  </TableBodyRowItem>
                  {visibleColumns.map(({ label, sortField }, index) => (
                    <TableBodyRowItem
                      key={sortField}
                      style={{ flex: columnFlex[index] }}
                    >
                      {fieldReducer(
                        getObjectPropertyByString(row, sortField),
                        sortField,
                      )}
                    </TableBodyRowItem>
                  ))}
                </TableBodyRow>
              ))}
            </TableBody>
          </TableBase>
        )}
      </DataBrowser>
    </Table>
  </WrapperGradiant>
);

export default Browse;
