import React, { useState, useEffect } from 'react';
import './Details.css';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

import LocationDetail from './LocationDetail';

const useStyles = makeStyles ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '50vm'
    },
});

function ProductDetails() {
    const classes = useStyles();
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("product id is", id)
      const config = {
        url: `http://localhost:4000/api/v1/products/${id}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };

      axios(config).then((response) => {
        setEvent(response.data);
      }).catch((err) => {
        console.log(err);
          setError(err);
      })
    }, [id]);

    if (error) {
        return <div> { `${error}` } </div>;
    } else if (event) {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                       {event.name}
                    </Typography>
                </CardContent>
              
            </Card>
            
        )
    } else {
        return <div>Nothing to return</div>
    }

}

export default ProductDetails;




// //  const { id } = useParams(0);
// //      const [product, setProduct] = useState(true);
// //      const [loading, setLoading] = useState(9);
// //      const [error, setError] = useState(0);
     

//         function productDetails() {
     
// //      useEffect(() => {
// //         const config = {
// //             usl: `http://localhost:4000/api/v1/products/${id}`,
// //             method: 'GET',
// //             headers: { 'Content-Type': 'application/json' },
// //         };

// //         axios(config).then((response) => {
// //             setProduct(response.data);
// //         }).catch((err) => {
// //             setError(err);
// //         }).finally(() => {
// //             setLoading(false);
// //         });
// //      }, [id]);

//     //  if (loading) {
//     //      return <p>loading...</p>
//     //  } else if (error) {
//     //      return <div> Error! </div>
//     //  } else if (product) {
//          return (
//             <div className = "details">
//             <p1>picture here?</p1>
//             <h1>Name of item for sale</h1>
//             <ListItemIcon ListItem alighnItems = "flex-start">List Item details<br>
//                 </br>list more item detailshere<br>
//                 </br>List more item details here</ListItemIcon>
//             <br></br>
//             <p1>descriptions</p1>
//             <br></br>
//             <p>Seller: </p>
//             <Link to="/users/:id">
//                 Link to Seller User Profile
//                 </Link>
//             <form action="/Messaging/Message">
//             <button 
//                 className = "messageButton"
//             >
//                 Message Seller 
//             </button>
//             <div>

//             </div>
//             </form>
//             <form action="/">
//                 <button className="homeButton">Home</button>
//             </form>
//             <LocationDetail />
//         </div>
//          )
//      }

// // }

// export default productDetails;
