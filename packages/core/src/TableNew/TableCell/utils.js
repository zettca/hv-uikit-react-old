import { SortXS, SortAscendingXS, SortDescendingXS } from "@hv/uikit-react-icons";

export const getSortIcon = (dir) => {
  switch (dir) {
    case "asc":
      return SortAscendingXS;
    case "desc":
      return SortDescendingXS;
    default:
      return SortXS;
  }
};

export const getSortDir = (sortDirection) => {
  switch (sortDirection) {
    case "asc":
      return "ascending";
    case "desc":
      return "descending";
    default:
      return null;
  }
};
