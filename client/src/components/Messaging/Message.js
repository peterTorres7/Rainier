// import { Button } from '@material-ui/core';

// export default function messaging() {
    
//     const message = [{
//         text: "fake messages????"
//     }]   

//     return (

//         <div>
//             <ChatItem 
//                 subtitle={`message`}
//                 title={`ughalsk;djfkl;sadjf`}
//                 date={new Date()}
//             />
//             <Input
//                 placeholder="type message here"
//             />
//             <Button>           
//                 Send Message
//             </Button>
//         </div>

//     )
// }

import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    makeStyles
} from "@material-ui/core";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    media: {
        display: 'flex',
        width: '100vw',
    },
    root: {
        display: 'inline',
        padding: theme.spacing(1),
        maxWidth: '100%',
        marginLeft: "20px",
        marginBottom: '20px',
        backgroundColor: "#d8e3e6",
        minWidth: '300px',
    },
    seller: {
        display: 'inline',
        textAlign: 'center',
        width: '50vw',
        backgroundColor: '#c2debd',
        color: '#3d804f',
    },
    details: {
        display: 'inline',
        textAlign: 'center',
        width: '50vw',
        backgroundColor: '#c2debd',
        color: '#3d804f',
    },
}));

export default function PopularItem({ event }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {event.sender}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {event.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </>
        </Card>
    )
}