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
    remember: {
        color: 'white',
    },
    rememberInput: {
    width: '20px',
    height: '20px',
    marginLeft: '15px',
    marginRight: '5px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
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
        
     
            <div className={style.paper}>
                <div className={style.card}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={style.form}> 
                        
						    <div className={style.inputGroup}>
                                
						            
                                    <TextField margin="normal" fullWidth label="Username"/>
                                
                                
						            
                                    <TextField align="center" fullWidth label="Password"/>
                                
					        </div> 
                        <Grid>
                            <Button className={style.submit}> Login </Button>
                            <Button className={style.submit}> Sign Up </Button>
                        </Grid>                           
                        
                    <Grid container>
                        <Link herf=""> Forgot your password? </Link>
                    </Grid>

                    </form>  
                </div>

            </div>
            
    
        

    );
}
	        
        
