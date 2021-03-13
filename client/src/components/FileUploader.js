import React, { useState } from 'react';
import {
  Button,
  Typography,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';
import fileUpload from './FileUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1),
    width: '100%',
  },
  imageUploader: {
    width: '10vw',
    margin: theme.spacing(1),
  },
}));

export default function FileUploader() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);

  const selectFile = (event) => {
    const { files } = event.target;
    setSelectedFile(files[0]);
  };

  const progressUpdater = (event) => {
    setUploadProgress(Math.round((100 * event.loaded)) / event.total);
  };

  const upload = () => {
    console.log('file to upload ', selectedFile);
    if (selectedFile) {
      fileUpload('featuredImage', selectedFile, progressUpdater)
        .then((response) => {
          console.log(response.data.message);
          setSelectedFile(null);
        })
        .catch((err) => {
          setError(err);
          setUploadProgress(0);
        });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.imageSelector}>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={selectFile}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
          >
            {/* I have no earthly idea why but component=span is crucial */}
            Choose a featured image:
          </Button>
        </label>
        {selectedFile
          ? (
            <Typography>
              {selectedFile.name}
            </Typography>
          )
          : <div>Select a File</div>}
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.imageUploader}
        disabled={!selectedFile}
        onClick={upload}
      >
        Upload
      </Button>
      <CircularProgress variant="determinate" value={uploadProgress} />
      { error
        ? <div> Whoops! </div>
        : null}
    </div>
  );
}