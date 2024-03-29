import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    nav: {
        margin: theme.spacing(2),
    },
}));

export default function Logout() {
    const { logout } = useAuth0();
    const classes = useStyles();

    return (
      <Button
        className={classes.nav}
        variant="outlined"
        color="inherit"
        onClick={() => {
          logout({
            returnTo:window.location.origin,
            });
        }}
      >
        Logout
      </Button>      
    )
}