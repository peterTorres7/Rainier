// import React from 'react';
// import './ProfilePage.css';
// import { 
//     Button
//      } from '@material-ui/core';


// /**
//  * 
//  * Making user profile page for sellers, buyers, and admins 
//  * 
//  * 1. user picture
//  * 2. user name
//  * 3. user location
//  * 4. ... user details?
//  * 5. items being sold buy user
//  * */

// // const myStle = makeStyles((theme) => {

// //     username {

// //     }


// // })

// export default function profilePage () {

//     return (
//         <div className = "UserProfile">
//             <h4>First Name Last Name</h4>
//             <p1>This person's address</p1>
//             <p>about this user</p>
        
        
//         </div>

//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
    backgroundColor: 'blue'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'grey'
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}