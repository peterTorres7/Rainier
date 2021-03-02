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
import AuthButtonGroup from './Auth/AuthButtonGroup';

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
    transaction: {
        color: "black",
    },
    rainierImage: {
        width: '50px',
        height: '50px',
    },
    createProduct: {
        color: 'white',
        background: 'goldenRod',
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#ADFBEE",
        marginRight: '20px',
    },
    searchIcon: {
        padding: theme.spacing(2, 2, 1, 2),
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        padding: theme.spacing(1, 1, 1, 1),
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
                    <form>
                    <InputBase className={classes.searchInput} placeholder="Search..." />
                    </form>
                </div>
                <Button className={classes.createProduct} component={Link} to={'/CreateProduct'}  size="small" color="primary">
                    Sell Product
                </Button>
                <AuthButtonGroup />
            </Toolbar>
        </AppBar>
        
    )
}