/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

const styles = theme => ({
  actionsContainer: {
    display: "flex",
    height: "100%",
    alignItems: "center"
  },
  marginLeft: {
    marginLeft: `${theme.spacing.lg}px`
  },
  iconContainer: {
    display: "inherit",
    marginLeft: `${theme.spacing.xs}px`,
    "&:hover": {
      backgroundColor: theme.palette.grey.clear
    }
  }
});

export default styles;