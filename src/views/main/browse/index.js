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

const data = [];

const Browse = () => (
  <WrapperGradiant>
    <Header>header</Header>
    <Preview>preview</Preview>
    <Table>
      <DataBrowser
        initialColumnFlex={['0 0 25%', '1 1 35%', '0 0 20%', '0 0 20%']}
        columns={columns}
      >
        {({ columnFlex, visibleColumns, defaultSortMethod }) => (
          <TableBase>
            <TableHead>
              <TableHeadRow>
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
