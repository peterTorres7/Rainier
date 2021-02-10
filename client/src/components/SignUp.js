import React from 'react';
import { 
    Button, 
    Grid, 
    Link, 
    makeStyles,
    Typography,
    Input,
    TextField
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        height: '100%',
        alignItems: 'center',
    },
    card: {
        height: '370px',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '400px',
        backgroundColor: theme.palette.success.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(1),
        alignItems: 'center'
    },
    inputGroup: {
        width: '50px',
        backgroundColor: '#FFC312',
        color: 'black',
        border: '0',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: 'black',
        backgroundColor: '#FFC312',
        width: '100px',
    },      
}));

export default function SignUp() {
    const style = useStyles();
    return (
        
        <Grid>
            <div className={style.container}>
                <div className={style.card}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={style.form}> 
						    <div className={style.inputGroup}>
                                <TextField margin="normal" fullWidth label="First Name"/>
                                <TextField margin="normal" fullWidth label="Last Name"/>
                                <TextField margin="normal" fullWidth label="User Name"/>
                                <TextField margin="normal" fullWidth label="Password"/>
                                <TextField margin="normal" fullWidth label="Email"/>
                                <TextField margin="normal" fullWidth label="Date of Birth"/>
					        </div> 
                        <Grid>
                            <Button className={style.submit}> Sign Up </Button>
                        </Grid>                           
                    </form>  
                </div>
            </div>
            
        </Grid>
        

    );
}
	        
        



