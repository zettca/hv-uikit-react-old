import React, { useMemo } from "react";
import range from "lodash/range";
import { useTable, useRowSelect, usePagination, useResizeColumns } from "react-table";

import { Ban } from "@hv/uikit-react-icons";

import { HvCheckBox, HvDropDownMenu, HvEmptyState } from "@hv/uikit-react-core";

import {
  HvTable,
  HvTableBody,
  HvTableCell,
  HvTableContainer,
  HvTableHead,
  HvTablePagination,
  HvTableRow,
} from "../..";

import { makeData, getColumns, useToggleIndex } from "./utils";

export default {
  title: "Lab/Table",
  parameters: {
    componentSubtitle: null,
    usage: "import { HvTable } from '@hv/uikit-react-core'",
  },
  component: HvTable,
  subcomponents: {
    HvTableBody,
    HvTableCell,
    HvTableContainer,
    HvTableHead,
    HvTableRow,
  },
};

export const Main = () => (
  <HvTableContainer>
    <HvTable>
      <HvTableHead>
        <HvTableRow>
          {getColumns().map((el) => (
            <HvTableCell key={el.Header}>{el.Header}</HvTableCell>
          ))}
        </HvTableRow>
      </HvTableHead>
      <HvTableBody>
        {makeData(6).map((el) => (
          <HvTableRow key={el.id} hover>
            <HvTableCell>{el.name}</HvTableCell>
            <HvTableCell>{el.createdDate}</HvTableCell>
            <HvTableCell>{el.eventType}</HvTableCell>
            <HvTableCell>{el.status}</HvTableCell>
            <HvTableCell>{el.riskScore}</HvTableCell>
            <HvTableCell>{el.severity}</HvTableCell>
            <HvTableCell>{el.priority}</HvTableCell>
          </HvTableRow>
        ))}
      </HvTableBody>
    </HvTable>
  </HvTableContainer>
);

Main.parameters = {
  docs: {
    description: { story: "A minimal table example." },
  },
};

export const Empty = () => {
  const EmptyRow = () => (
    <HvTableRow>
      <HvTableCell colSpan="100%" style={{ height: 100 }}>
        <HvEmptyState message="No data to display" icon={<Ban role="presentation" />} />
      </HvTableCell>
    </HvTableRow>
  );
  return (
    <HvTableContainer>
      <HvTable>
        <HvTableHead>
          <HvTableRow>
            {getColumns().map((el) => (
              <HvTableCell key={el.Header}>{el.Header}</HvTableCell>
            ))}
          </HvTableRow>
        </HvTableHead>
        <HvTableBody>
          <EmptyRow />
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

Main.parameters = {
  docs: {
    description: { story: "A minimal table example." },
  },
};

export const SelectableSimple = () => {
  const [checkedIdx, toggleChecked] = useToggleIndex(0);
  const data = useMemo(() => makeData(6), []);
  const actions = useMemo(() => range(3).map((i) => ({ label: `Option ${i + 1}` })), []);

  return (
    <HvTableContainer>
      <HvTable>
        <HvTableHead>
          <HvTableRow>
            <HvTableCell padding="checkbox" />
            {getColumns().map((el) => (
              <HvTableCell key={el.Header}>{el.Header}</HvTableCell>
            ))}
            <HvTableCell padding="checkbox" />
          </HvTableRow>
        </HvTableHead>
        <HvTableBody>
          {data.map((el, idx) => (
            <HvTableRow key={el.id} hover selected={checkedIdx === idx}>
              <HvTableCell padding="checkbox">
                <HvCheckBox checked={checkedIdx === idx} onClick={toggleChecked(idx)} />
              </HvTableCell>
              <HvTableCell>{el.name}</HvTableCell>
              <HvTableCell>{el.createdDate}</HvTableCell>
              <HvTableCell>{el.eventType}</HvTableCell>
              <HvTableCell>{el.status}</HvTableCell>
              <HvTableCell>{el.riskScore}</HvTableCell>
              <HvTableCell>{el.severity}</HvTableCell>
              <HvTableCell>{el.priority}</HvTableCell>
              <HvTableCell padding="checkbox">
                <HvDropDownMenu keepOpened={false} placement="left" dataList={actions} />
              </HvTableCell>
            </HvTableRow>
          ))}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

SelectableSimple.parameters = {
  docs: {
    description: { story: "A table with checkboxes being managed by a simple hook." },
  },
};

export const SelectableReactTable = () => {
  const data = useMemo(() => makeData(6), []);
  const columns = useMemo(
    () => [
      {
        id: "selection",
        padding: "checkbox",
        Cell: ({ row }) => <HvCheckBox {...row.getToggleRowSelectedProps()} />,
      },
      ...getColumns(),
    ],
    []
  );

  const instance = useTable({ columns, data }, useRowSelect);
  const { getTableProps, getTableBodyProps, prepareRow, headers, rows } = instance;

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          <HvTableRow>
            {headers.map((col) => (
              <HvTableCell key={col.Header} rtCol={col} {...col.getHeaderProps()}>
                {col.render("Header")}
              </HvTableCell>
            ))}
          </HvTableRow>
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <HvTableRow hover key={row.Header} selected={row.isSelected} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell key={cell.Header} rtCol={cell.column} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

SelectableReactTable.parameters = {
  docs: {
    description: { story: "A table with checkboxes being managed by `react-table`." },
  },
};

export const Pagination = () => {
  const data = useMemo(() => makeData(60), []);
  const columns = useMemo(
    () => [
      {
        id: "selection",
        padding: "checkbox",
        width: 32,
        Cell: ({ row }) => <HvCheckBox {...row.getToggleRowSelectedProps()} />,
      },
      ...getColumns(),
    ],
    []
  );

  const instance = useTable({ columns, data }, usePagination, useRowSelect, useResizeColumns);
  const { getTableProps, getTableBodyProps, prepareRow, headers, page } = instance;

  return (
    <div>
      <HvTableContainer>
        <HvTable {...getTableProps()}>
          <HvTableHead>
            <HvTableRow>
              {headers.map((col) => (
                <HvTableCell
                  key={col.Header}
                  rtCol={col}
                  // adds fixed column sizes
                  {...col.getHeaderProps({ style: { width: col.width } })}
                >
                  {col.render("Header")}
                </HvTableCell>
              ))}
            </HvTableRow>
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <HvTableRow hover key={row.Header} selected={row.isSelected} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell key={cell.Header} rtCol={cell.column} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </HvTableCell>
                  ))}
                </HvTableRow>
              );
            })}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      <HvTablePagination rtInstance={instance} />
    </div>
  );
};

Pagination.parameters = {
  docs: {
    description: { story: "A table with pagination and row selection, managed by `react-table`." },
  },
};
