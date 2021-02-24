const styles = (theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.atmo4}`,
    "&$hover:hover": {
      backgroundColor: theme.palette.atmo3,
    },
    "&$selected, &$selected:hover": {
      backgroundColor: theme.palette.atmo3,
    },
  },
  selected: {},
  hover: {},
});

export default styles;
