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
  paper: {
    border: `solid 1px ${theme.palette.grey.plain}`,
    padding: `${theme.spacing.xs}px`,
    marginTop: "5px"
  },
  moreVertContainer: {
    height: "100%"
  },
  moreVertBtn: {
    width: "100%",
    height: "100%",
    minWidth: "32px",
    padding: "0",
    "&:hover": {
      background: `${theme.palette.grey.inspire}`,
      color: `${theme.palette.common.white}`
    }
  },
  activated: {
    background: `${theme.palette.grey.inspire}`,
    color: `${theme.palette.common.white}`
  },
  actionBtn: {
    display: "block",
    width: "100%",
    color: `${theme.palette.primary.main}`
  }
});

export default styles;