import hexToRgbA from "../../utils/hexToRgbA";

const styles = (theme) => ({
  root: {
    minWidth: 70,
    border: "none",
  },
  head: {
    height: 52,
    verticalAlign: "top",
    ...theme.hv.typography.highlightText,
    "&$sortable": {
      "&:hover": {
        backgroundColor: theme.palette.atmo3,
      },
    },
  },
  body: {
    height: 32,
    backgroundColor: "transparent",
    padding: theme.hvSpacing(0, "xs"),
    ...theme.hv.typography.normalText,
    "&$sortable": {
      paddingLeft: 32,
    },
    "&$sorted": {
      backgroundColor: hexToRgbA(theme.palette.atmo1, 0.4),
    },
  },
  footer: {},
  sortable: {},
  sorted: {},
  sticky: {
    left: 0,
    zIndex: 10,
    position: "sticky",
    backgroundColor: theme.palette.atmo2,
  },
});

export default styles;
