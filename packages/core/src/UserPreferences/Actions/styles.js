const hover = theme => ({
  background: theme.hv.palette.atmosphere.atmo4,
  "& *": {
    background: theme.hv.palette.atmosphere.atmo4
  }
});

const styles = theme => ({
  root: {
    display: "block",
    padding: theme.spacing("sm", "sm", 0, "sm"),
    background: theme.hv.palette.atmosphere.atmo1,

    "& :not(:last-child)": {
      marginBottom: "8px"
    }
  },

  action: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "32px",
    color: theme.hv.palette.atmosphere.acce1,

    "&:hover": hover(theme),

    "&:focus": hover(theme),

    cursor: "pointer",
    "& *": {
      cursor: "pointer"
    }
  },
  noIcon: {
    paddingLeft: `${theme.hv.spacing.xs}px`
  }
});

export default styles;