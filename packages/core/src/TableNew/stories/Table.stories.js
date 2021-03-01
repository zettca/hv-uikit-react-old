import React, { useMemo, useState } from "react";
import range from "lodash/range";
import { useTable, useSortBy, useRowSelect, usePagination, useExpanded } from "react-table";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Edit, Duplicate, Drag, Fail, DropDownXS, DropRightXS } from "@hv/uikit-react-icons";

import {
  HvBulkActions,
  HvButton,
  HvCheckBox,
  HvDropDownMenu,
  HvEmptyState,
  HvPagination,
  HvTable,
  HvTableBody,
  HvTableCell,
  HvTableContainer,
  HvTableHead,
  HvTableRow,
} from "../..";

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

const getRand = (id) => (Math.abs(Math.sin(id)) * 10 ** 4) % 1;
const newEntry = (value, i) => {
  const r = getRand(i);
  return {
    id: `${i}`,
    name: `Event ${i}`,
    createdDate: "10/14/2018",
    eventType: "Anomaly detection",
    status: i % 2 === 0 ? "Closed" : "Open",
    riskScore: `${100 - i}`,
    severity: (r > 0.66 && "Critical") || (r > 0.33 && "Major") || "Minor",
    priority: (r > 0.66 && "High") || (r > 0.33 && "Medium") || "Low",
  };
};

const makeData = (len = 8) => Array.from(Array(len), newEntry);

// https://react-table.tanstack.com/docs/api/useTable#column-options
const getColumns = () => [
  { Header: "Title", accessor: "name", isSortable: true },
  { Header: "Time", accessor: "createdDate", isSortable: true },
  { Header: "Event Type", accessor: "eventType" },
  { Header: "Status", accessor: "status", isSortable: true },
  { Header: "Probability", accessor: "riskScore", isSortable: true },
  { Header: "Severity", accessor: "severity", isSortable: true },
  { Header: "Priority", accessor: "priority", isSortable: true },
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
        <HvEmptyState message="No data to display" icon={<Fail role="presentation" />} />
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

export const Selectable = () => {
  const [checkedIdx, toggleChecked] = useToggleIndex(0);
  const [data] = useState(makeData(6));
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
            <HvTableCell padding="none" />
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
              <HvTableCell padding="none">
                <HvDropDownMenu keepOpened={false} placement="left" dataList={actions} />
              </HvTableCell>
            </HvTableRow>
          ))}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const ReactTable = () => {
  const sampleData = useMemo(() => makeData(64), []);
  const sampleColumns = useMemo(
    () => [
      {
        id: "expander",
        padding: "checkbox",
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <HvCheckBox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }) => <HvCheckBox {...row.getToggleRowSelectedProps()} />,
      },
      {
        id: "selection",
        padding: "checkbox",
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? <DropDownXS /> : <DropRightXS />}
          </span>
        ),
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <DropDownXS /> : <DropRightXS />}
          </span>
        ),
      },
      ...getColumns(),
    ],
    []
  );

  const ExpandableRow = ({ row }) => (
    <React.Fragment key={row.id}>
      <HvTableRow hover selected={row.isSelected} {...row.getRowProps()}>
        {row.cells.map((cell) => (
          <HvTableCell
            col={cell.column}
            padding={cell.column.padding}
            sortable={cell.column.isSortable}
            sorted={cell.column.isSorted}
            {...cell.getCellProps()}
          >
            {cell.render("Cell")}
          </HvTableCell>
        ))}
      </HvTableRow>
      <HvTableRow style={{ display: row.isExpanded ? null : "none" }}>
        <HvTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={20}>
          <code>{JSON.stringify(row.values, null, 2)}</code>
        </HvTableCell>
      </HvTableRow>
    </React.Fragment>
  );

  const Table = ({ data, columns }) => {
    const instance = useTable(
      { columns, data },
      useSortBy,
      useExpanded,
      usePagination,
      useRowSelect
    );

    const {
      getTableProps,
      getTableBodyProps,
      toggleAllRowsSelected,
      toggleAllPageRowsSelected,
      headers,
      rows,
      page,
      prepareRow,
      canPreviousPage,
      canNextPage,
      pageOptions,
      gotoPage,
      setPageSize,
      selectedFlatRows,
      state: { pageSize, pageIndex },
    } = instance;

    return (
      <div>
        <HvBulkActions
          numTotal={rows.length}
          numSelected={selectedFlatRows.length}
          showSelectAllPages
          onSelectAll={toggleAllPageRowsSelected}
          onSelectAllPages={toggleAllRowsSelected}
        />
        <br />
        <HvTableContainer>
          <HvTable {...getTableProps()}>
            <HvTableHead>
              <HvTableRow>
                {headers.map((col) => (
                  <HvTableCell
                    key={col.Header}
                    col={col}
                    align={col.align}
                    sortable={col.isSortable}
                    sortDirection={col.isSorted && (col.isSortedDesc ? "desc" : "asc")}
                    {...col.getHeaderProps(col.isSortable ? col.getSortByToggleProps() : {})}
                  >
                    {col.render("Header")}
                  </HvTableCell>
                ))}
              </HvTableRow>
            </HvTableHead>
            <HvTableBody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return <ExpandableRow row={row} />;
              })}
            </HvTableBody>
          </HvTable>
        </HvTableContainer>
        <HvPagination
          canPrevious={canPreviousPage}
          canNext={canNextPage}
          pages={pageOptions.length}
          page={pageIndex}
          pageSize={pageSize}
          onPageChange={gotoPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    );
  };

  return <Table data={sampleData} columns={sampleColumns} />;
};

ReactTable.parameters = {
  docs: {
    description: { story: "A Table using useTable to manage row selection, sorting, and ...." },
  },
};

export const DragAndDrop = () => {
  const [data, setData] = useState(makeData(12));

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    setData(reorder(data, source.index, destination.index));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <HvTableContainer>
        <HvTable>
          <HvTableHead>
            <HvTableRow>
              {getColumns().map((el) => (
                <HvTableCell key={el.Header}>{el.Header}</HvTableCell>
              ))}
              <HvTableCell />
            </HvTableRow>
          </HvTableHead>
          <Droppable droppableId="droppable">
            {(provided) => (
              <HvTableBody ref={provided.innerRef}>
                {data.map((el, idx) => (
                  <Draggable key={el.id} index={idx} draggableId={el.id}>
                    {(provided2) => (
                      <HvTableRow hover ref={provided2.innerRef} {...provided2.draggableProps}>
                        <HvTableCell>{el.name}</HvTableCell>
                        <HvTableCell>{el.createdDate}</HvTableCell>
                        <HvTableCell>{el.eventType}</HvTableCell>
                        <HvTableCell>{el.status}</HvTableCell>
                        <HvTableCell>{el.riskScore}</HvTableCell>
                        <HvTableCell>{el.severity}</HvTableCell>
                        <HvTableCell>{el.priority}</HvTableCell>
                        <HvTableCell padding="checkbox">
                          <div style={{ display: "flex" }}>
                            <HvButton icon>
                              <Edit />
                            </HvButton>
                            <HvButton icon>
                              <Duplicate />
                            </HvButton>
                            <Drag {...provided2.dragHandleProps} />
                          </div>
                        </HvTableCell>
                      </HvTableRow>
                    )}
                  </Draggable>
                ))}
              </HvTableBody>
            )}
          </Droppable>
        </HvTable>
      </HvTableContainer>
    </DragDropContext>
  );
};
