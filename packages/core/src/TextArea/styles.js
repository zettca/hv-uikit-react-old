const styles = {
  root: {
    display: "inline-block",
    width: "100%",
  },
  resizable: {
    width: "auto",
  },
  disabled: {},
  invalid: {},

  baseInput: {
    clear: "both",
    float: "left",
  },

  input: {},
  inputResizable: {
    resize: "auto",
    minWidth: "150px",
    maxWidth: "610px",
  },

  labelContainer: {
    float: "left",
    display: "flex",
    alignItems: "flex-start",
  },
  label: {
    display: "block",
    float: "left",
    paddingBottom: "6px",
  },
  description: {
    display: "block",
    float: "left",
  },
  characterCounter: {
    display: "block",
    float: "right",
    textAlign: "right",
    marginBottom: "6px",
  },
  error: {
    float: "left",
  },
};

export default styles;
