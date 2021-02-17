import React from 'react';
import {
    
    InputBase,
    Button,
    Paper,
    Typography,
    makeStyles
} from "@material-ui/core";
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px',
        maxWidth: '100%',
        padding: "25px",
        backgroundColor: "#28B1D6",
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
}));

export default function Transaction() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography variant="h2">
                Looking for transactions?
            </Typography> 
            <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <form>
                    <InputBase className={classes.searchInput} placeholder="Search by user..." />
                    </form>
            </div>
        </Paper>
    )
}