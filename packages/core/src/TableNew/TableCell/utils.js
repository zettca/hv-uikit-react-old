import { SortXS, SortAscendingXS, SortDescendingXS } from "@hv/uikit-react-icons";

// eslint-disable-next-line import/prefer-default-export
export const getSortComponent = (dir) => {
  switch (dir) {
    case "asc":
      return SortAscendingXS;
    case "desc":
      return SortDescendingXS;
    default:
      return SortXS;
  }
};
