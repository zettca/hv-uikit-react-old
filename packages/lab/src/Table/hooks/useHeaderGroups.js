/* eslint-disable no-param-reassign */

import { useEffect } from "react";

/**
 * Moving non grouped headers to the top level,
 * by placing them in the position of their top level placeholder.
 *
 * By default the header groups are built bottom top,
 * that results in non grouped headers to be placed
 * at the bottom row in the table head.
 *
 * @param {Array.<Object>} headerGroups - table header groups
 */
const replaceHeaderPlaceholders = (headerGroups) => {
  const groupLevels = headerGroups.length;
  if (groupLevels <= 1) {
    return; // no sub headers defined
  }

  const [ headerGroup ] = headerGroups;

  const maxDepth = groupLevels - 1;
  const leafGroup = headerGroups[maxDepth];

  headerGroup.headers.forEach((header, position) => {
    header.rowSpan = 1;

    const { placeholderOf } = header;
    if (placeholderOf == null) {
      // group header must be aligned to center
      header.align = "center";
    } else {
      // is placeholder header
      const leafIndex = leafGroup.headers.slice(position).findIndex(({ id }) => id === placeholderOf.id) + position;

      // store leaf placeholder header
      header.depth = maxDepth;
      leafGroup.headers[leafIndex] = header;

      // replace placeholder with leaf header
      placeholderOf.rowSpan = groupLevels;
      headerGroup.headers[position] = placeholderOf;
    }
  });
};

const getColumnBoundaryProps = (column) => {
  const groupColumns = column.parent?.columns ?? [column];
  const groupIdx = groupColumns.findIndex(({ id }) => id === column.id);

  return {
    groupColumnMostLeft: groupIdx === 0,
    groupColumnMostRight: groupIdx === groupColumns.length - 1
  };
};

// props target: <table><thead><tr><th>
export const getHeaderPropsHook = (props, { column }) => {
  const nextProps = getColumnBoundaryProps(column);

  if (column.depth === 0) {
    nextProps.rowSpan = column.rowSpan;
  }

  if (column.placeholderOf != null) {
    nextProps.style = { ...props.style, display: "none" }
  }

  return [props, nextProps];
};

// props target: <table><tbody><tr><td>
export const getCellPropsHook = (props, { cell }) => {
  const nextProps = getColumnBoundaryProps(cell.column);

  return [props, nextProps];
};

export const useInstanceHook = (instance) => {
  useEffect(() => {
    replaceHeaderPlaceholders(instance.headerGroups);
  }, [instance.headerGroups]);
};

const useHeaderGroups = (hooks) => {
  hooks.useInstance.push(useInstanceHook);

  // props target: <table><thead><tr><th>
  hooks.getHeaderProps.push(getHeaderPropsHook);
  // props target: <table><tbody><tr><td>
  hooks.getCellProps.push(getCellPropsHook);
};

useHeaderGroups.pluginName = "useHvHeaderGroups";

export default useHeaderGroups;
