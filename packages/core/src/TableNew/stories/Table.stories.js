import React, { useMemo, useState } from "react";
import range from "lodash/range";
import { useTable, useSortBy } from "react-table";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Edit, Duplicate, Drag, Fail } from "@hv/uikit-react-icons";

import {
  HvButton,
  HvCheckBox,
  HvDropDownMenu,
  HvEmptyState,
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
              <HvTableCell key={el.Header} variant="head">
                {el.Header}
              </HvTableCell>
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

export const SelectableWithActions = () => {
  const [checkedIdx, toggleChecked] = useToggleIndex(0);
  const [data] = useState(makeData(6));
  const actions = useMemo(() => range(3).map((i) => ({ label: `Option ${i + 1}` })), []);

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
                <HvTableCell key={el.Header} variant="head">
                  {el.Header}
                </HvTableCell>
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
