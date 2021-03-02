const styles = (theme) => ({
  root: {
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    borderBottom: `1px solid ${theme.palette.atmo4}`,

    "&$hover:hover": {
      backgroundColor: theme.palette.atmo3,
    },
    "&$selected, &$selected:hover": {
      backgroundColor: theme.palette.atmo3,
    },
  },
  head: {},
  body: {},
  footer: {},
  selected: {},
  hover: {},
});

export default styles;
