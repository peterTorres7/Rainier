import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Button, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: 'grey',
  }
}));

export default function AutoGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <h4>First and Last Name</h4>
        <h5>User is a: (admin) {props.role}</h5>
        <p>User locations & other details</p>
        <Button 
          className={classes.button}
          component={Link}
          to={'/Messaging/Message'}
          >Message Seller
        </Button>
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