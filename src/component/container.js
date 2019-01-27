import React from "react";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: 10,
    margin: 30
  },
  pos: {
    marginTop: 20
  }
});

const a = [
  [1, "ACZ885C2301", "A study looking into smoking cessation", "In-house"],
  [2, "ABC123A2201", "A study investigating safety", "Outsourced"],
  [
    3,
    "FZR001A1102",
    "A placebo-controlled study, investigating dwarfisim in China",
    "Mixed sourcing"
  ],
  [4, "DOG321E2411", "Something to do with werewolves I think", "In-house"],
  [5, "CAT456T2222", "Type II diabetes in pugs", "Outsourced"],
  [6, "ZZZ400T1111", "Hyperventilation study", "In"]
];

const Container = props => {
  return (
    <Grid container spacing={24}>
      {a.map(i => {
        return (
          <Grid item xs={6}>
            <SimpleCard studyname={i} key={i} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(Container);
