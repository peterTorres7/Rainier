import react from 'react';
import axios from 'axios';

export default function FileUpload() {
    
    //const [file, setFile] = react.useState("");

    function handleUpload(file, uploadProgressHandler) {
        console.log('handling upload here');
        const formData = new FormData();
        formData.append('featuredImage',file);
        const axiosConfig = {
            url: 'http://localhost:4000/api/v1/files',
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        data: formData,
        onUploadProgress: uploadProgressHandler,        
        };

    return axios(axiosConfig);

    }

    return (
        <div id="uploadFile">
            <ul>Please Upload an Image of the Product for Sale</ul>
            <input type="file" onChange={handleUpload} />
            {/* <p>FileName: {file.name}</p> */}
        </div>
    )

}

  