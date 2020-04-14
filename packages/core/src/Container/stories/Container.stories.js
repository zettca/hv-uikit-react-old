/* eslint-disable react/prop-types */
import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import HvContainer from "../Container";
import useWidth from "../../utils/useWidth";

export default {
  title: "Foundation/Container",
  parameters: {
    componentSubtitle: null,
    usage: "import {HvContainer} from '@hv/uikit-react-core/dist/'"
  },
  component: HvContainer
};

export const Main = () => {
  const styles = theme => ({
    root: {
      border: "1px solid",
      backgroundColor: theme.hv.palette.base.base1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: theme.hv.palette.atmosphere.atmo3,
      height: 125
    }
  });

  const width = useWidth();

  const Container = withStyles(styles)(({ classes }) => (
    <HvContainer className={classes.root}>
      <Paper className={classes.paper}>{width}</Paper>
    </HvContainer>
  ));

  return <Container />;
};

export const SmMaxWidth = () => {
  const styles = theme => ({
    root: {
      border: "1px solid",
      backgroundColor: theme.hv.palette.base.base1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: theme.hv.palette.atmosphere.atmo3,
      height: 125
    }
  });

  const width = useWidth();

  const Container = withStyles(styles)(({ classes }) => (
    <HvContainer className={classes.root} maxWidth="sm">
      <Paper className={classes.paper}>{width}</Paper>
    </HvContainer>
  ));

  return <Container />;
};

SmMaxWidth.story = {
  parameters: {
    docs: {
      storyDescription: "The Container with its size set to (640)."
    }
  }
};

export const FullWidth = () => {
  const styles = theme => ({
    root: {
      border: "1px solid",
      backgroundColor: theme.hv.palette.base.base1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: theme.hv.palette.atmosphere.atmo3,
      height: 125
    }
  });

  const width = useWidth();

  const Container = withStyles(styles)(({ classes }) => (
    <HvContainer className={classes.root} maxWidth={false}>
      <Paper className={classes.paper}>{width}</Paper>
    </HvContainer>
  ));

  return <Container />;
};

FullWidth.story = {
  parameters: {
    docs: {
      storyDescription: "The Container with no max size."
    }
  }
};