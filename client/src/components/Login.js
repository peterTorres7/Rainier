import React from 'react';
import { 
  Button, 
  Grid, 
  Link, 
  makeStyles,
  Typography,
  Paper
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    card: {
        marginTop: 'fit',
        marginBottom: 'fit',
        width: '500px',
        backgroundColor: theme.palette.success.main,
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', 
        marginTop: 'auto',
        marginBottom: 'auto',
        alignItems: 'center'
    },
    paper: {
        textAlign: 'left',
        margin: theme.spacing(3,git  2, 2),
    },
    submit: {
        margin: theme.spacing(3, 2, 2),
        color: 'black',
        backgroundColor: '#FFC312',
        width: '100px',
    },
    links:{
        color: 'white',
    }      
}));

export default function Login() {
    const style = useStyles();
    return (
        <div className={style.card}>
            <Typography component="h1" variant="h5">
                Login
            </Typography>

            <form className={style.form}> 
                <Grid container >
                    <Grid container container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={5}>
                                <Paper className={style.paper}>
                                    <label htmlFor="UserName">User Name</label>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={style.paper}>
                                <input id="UserName" type="UserName"/>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid> 
                </Grid> 
                        
                <Grid container>
                    <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={5}>
                                <Paper className={style.paper}>
                                <label htmlFor="Password">Password</label>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={style.paper}>
                                    <input id="Password" type="Password"/>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid> 
                </Grid>     
                
                <Grid>
                    <Button className={style.submit}> Login </Button>
                    <Button className={style.submit}> Sign Up </Button>
                    <Link herf=""><h6>Forgot your password? </h6>  </Link>
                </Grid>               
            </form>  
        </div>
    );
}