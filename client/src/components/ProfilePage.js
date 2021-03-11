import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
  },
}));

const colors = createMuiTheme({
  palette: {
    primary: {
      main: '#81d4fa',
    },
    secondary: {
      main: '#5e35b1',
    },
  },
});


export default function AutoGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={colors.palette.primary}>
        <h4>First and Last Name</h4>
        <h5>User is a: (admin) {props.role}</h5>
        <p>User locations & other details</p>
        <form action="/Messaging/Message">
          <button className="messageButton">Message Seller</button>
        </form>
      </Container>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>item for sale (if seller)</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>item for sale (if seller)</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>item for sale (if seller)</Paper>
        </Grid>
      </Grid>
    </div>
  );
}