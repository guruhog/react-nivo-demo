import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
import NivoLine from "./NivoLine";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 5
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[400] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

function SimpleCard(props) {
  const { classes, studyname } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          />
          <Typography variant="h5" component="h2">
            {studyname[1]}
          </Typography>
          <Typography variant="h6" component="h4">
            {studyname[2]}
          </Typography>
          <Typography component="p"> Sourcing:{studyname[3]}</Typography>
          <br />
          <br />
          <NivoLine />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  studyname: PropTypes.array
};

export default withStyles(styles)(SimpleCard);
