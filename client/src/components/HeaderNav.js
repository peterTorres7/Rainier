import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderNav.css';
import {
    AppBar,
    Button,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
    makeStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import rainierLogo from '../images/mtRainier.png';
const useStyles = makeStyles((theme) => ({

    iconButton: {
        marginRight: theme.spacing(3),
    },
    logIn: {
        color: "black",
    },
    signUp: {
        color: "black",
    },
    rainierImage: {
        width: '50px',
        height: '50px',
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#ADFBEE",
    },
    searchIcon: {
        padding: theme.spacing(2, 2, 1, 2),
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: theme.spacing(6),
    },
    title: {
        flexGrow: 2,
        textAlign: 'center',
    },
    toolbar: {
        backgroundColor: "#1F70B1",
    },
    
}));

export default function HeaderNav() {
    const classes = useStyles();
    return (
        
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <IconButton className={classes.iconButton} component={Link} to={'/'} edge="start" aria-label="menu">
                    <img src={rainierLogo} className={classes.rainierImage} alt='Mt. Rainier Logo' />
                </IconButton>
                <Typography className={classes.title} variant="h5"> 
                    Casa de Rainier
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase className={classes.searchInput} placeholder="Search..." />
                </div>
                <Button className={classes.logIn} component={Link} to={'/Login.js'}  size="small" color="primary">
                    Log In
                </Button>
                <Button className={classes.signUp} component={Link} to={'/SignUp.js'}  size="small" color="primary">
                    Sign Up
                </Button>
            </Toolbar>
        </AppBar>
        
    )
}