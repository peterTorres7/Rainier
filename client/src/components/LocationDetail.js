import React from 'react';
import { makeStyles } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const useStyles = makeStyles ({
    root: {
        width: '300px',
        height: '300px',
        backgroundColor: 'yellow',
    },
});

const zoomLevel =  55;

export default function LocationDetail({ location }) {
    const classes = useStyles();
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    return (
        <div className={classes.root}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: apiKey }}
              defaultCenter={[47.6062, 122.3321]}
              defaultZoom={zoomLevel}
            >
              <Marker
                // lat={location.lat}
                // lng={location.lng}
                text="Marker"
                />
            </GoogleMapReact>
        </div>
    );
}