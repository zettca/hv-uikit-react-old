/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import HvLink from "../../../src/Link";

const ActionsList = ({ classes, eventId, dismiss, close }) => {
  const path = `events/${eventId}`;

  return (
    <div className={classes.root}>
      <HvLink href={path}>
        <Button className={classes.button}>View</Button>
      </HvLink>
      <Button
        className={classes.button}
        onClick={() => {

          dismiss({
            variables: {
              id: eventId,
              date: new Date().toISOString()
            }
          });

          close();
        }}
      >
        Dismiss
      </Button>
    </div>
  );
};

ActionsList.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  eventId: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default ActionsList;