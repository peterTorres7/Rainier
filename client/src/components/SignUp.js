import React from 'react';
import { 
  Button, 
  Grid, 
  TextField, 
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
        margin: theme.spacing(3, 2, 2),
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

export default function SignUp() {
    const style = useStyles();
    return (
        <div className={style.card}>
            <Typography component="h1" variant="h5">
                Register
            </Typography>

            <form className={style.form}> 
                <Grid container >
                    <Grid container container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={5}>
                                <Paper className={style.paper}>
                                    <label htmlFor="FirstName">First Name</label>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={style.paper}>
                                <input id="FirstName" type="FirstName"/>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid> 
                </Grid> 

                <Grid container >
                    <Grid container container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={5}>
                                <Paper className={style.paper}>
                                    <label htmlFor="LastName">Last Name</label>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={style.paper}>
                                <input id="LastName" type="LastName"/>
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
                
                <Grid container >
                    <Grid container container item xs={12} spacing={3}>
                        <React.Fragment>
                            <Grid item xs={5}>
                                <Paper className={style.paper}>
                                    <label htmlFor="Email">Email</label>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={style.paper}>
                                <input id="Email" type="Email"/>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid> 
                </Grid>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="01-01-01"
                    className={style.textField}
                    InputLabelProps={{shrink: true,}}
                />
                <Grid>
                    <Button className={style.submit}> Sign Up </Button>
                </Grid>                           
            </form>  
        </div>
    );
}