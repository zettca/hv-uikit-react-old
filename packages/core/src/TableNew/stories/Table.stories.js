import React, { useMemo, useState } from "react";
import range from "lodash/range";
import { useTable, useSortBy } from "react-table";

import {
  HvDropDownMenu,
  HvTable,
  HvTableBody,
  HvTableCell,
  HvTableContainer,
  HvTableHead,
  HvTableRow,
} from "../..";
import HvCheckBox from "../../CheckBox";

export default {
  title: "Visualizations/TableNew",
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

const newEntry = (value, i) => {
  const r = Math.random();
  return {
    id: `${i}`,
    name: `Event ${i}`,
    createdDate: "10/14/2018",
    eventType: "Anomaly detection",
    status: i % 2 === 0 ? "Closed" : "Open",
    riskScore: `${100 - i}`,
    severity: (r > 0.66 && "Critical") || (r > 0.33 && "Major") || "Minor",
    priority: r > 0.5 ? "High" : "Medium",
  };
};

const makeData = (len = 8) => Array.from(Array(len), newEntry);
const getColumns = () => [
  { Header: "Title", accessor: "name" },
  { Header: "Time", accessor: "createdDate" },
  { Header: "Event Type", accessor: "eventType", sortable: false },
  { Header: "Status", accessor: "status" },
  { Header: "Probability", accessor: "riskScore" },
  { Header: "Severity", accessor: "severity" },
  { Header: "Priority", accessor: "priority" },
];

const useToggleIndex = (initialState) => {
  const [index, setIndex] = useState(initialState);

  const toggleState = (idx) => () => {
    setIndex(idx === index ? -1 : idx);
  };

  return [index, toggleState];
};

export const Main = () => (
  <HvTableContainer>
    <HvTable>
      <HvTableHead>
        <HvTableRow>
          {getColumns().map((el) => (
            <HvTableCell key={el.Header} variant="head">
              {el.Header}
            </HvTableCell>
          ))}
        </HvTableRow>
      </HvTableHead>
      <HvTableBody>
        {makeData(6).map((el) => (
          <HvTableRow key={el.id} hover>
            <HvTableCell>{el.name}</HvTableCell>
            <HvTableCell align="right">{el.createdDate}</HvTableCell>
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

export const SelectableWithActions = () => {
  const [checkedIdx, toggleChecked] = useToggleIndex(0);
  const [data] = useState(makeData(6));

  return (
    <HvTableContainer>
      <HvTable>
        <HvTableHead>
          <HvTableRow>
            <HvTableCell />
            {getColumns().map((el) => (
              <HvTableCell key={el.Header} variant="head">
                {el.Header}
              </HvTableCell>
            ))}
            <HvTableCell />
          </HvTableRow>
        </HvTableHead>
        <HvTableBody>
          {data.map((el, idx) => (
            <HvTableRow key={el.id} hover selected={checkedIdx === idx}>
              <HvTableCell padding="checkbox">
                <HvCheckBox checked={checkedIdx === idx} onClick={toggleChecked(idx)} />
              </HvTableCell>
              <HvTableCell>{el.name}</HvTableCell>
              <HvTableCell align="right">{el.createdDate}</HvTableCell>
              <HvTableCell>{el.eventType}</HvTableCell>
              <HvTableCell>{el.status}</HvTableCell>
              <HvTableCell>{el.riskScore}</HvTableCell>
              <HvTableCell>{el.severity}</HvTableCell>
              <HvTableCell>{el.priority}</HvTableCell>
              <HvTableCell padding="checkbox">
                <HvDropDownMenu
                  placement="left"
                  dataList={range(3).map((i) => ({ label: `Option ${i + 1}` }))}
                />
              </HvTableCell>
            </HvTableRow>
          ))}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const Sortable = () => {
  const sampleData = useMemo(() => makeData(12), []);

  const SortableTable = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
      { columns, data },
      useSortBy
    );

    return (
      <HvTableContainer>
        <HvTable {...getTableProps()}>
          <HvTableHead>
            <HvTableRow>
              {headers.map((col) => (
                <HvTableCell
                  padding="none"
                  key={col.Header}
                  align={col.align}
                  variant="head"
                  sortable
                  sortDirection={col.isSorted && (col.isSortedDesc ? "desc" : "asc")}
                  {...col.getHeaderProps(col.getSortByToggleProps())}
                >
                  {col.render("Header")}
                </HvTableCell>
              ))}
            </HvTableRow>
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <HvTableRow key={row.id} hover {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell sortable sorted={cell.column.isSorted} {...cell.getCellProps()}>
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

  return <SortableTable columns={getColumns()} data={sampleData} />;
};
