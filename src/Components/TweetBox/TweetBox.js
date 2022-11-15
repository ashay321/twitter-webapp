// import { Avatar, Button } from "@mui/material";
// import React from "react";
// import "./TweetBox.css";
// import PermMediaIcon from "@mui/icons-material/PermMedia";
// function TweetBox() {
//   return (
//     <div className="tweetBox">
//       <form>
//         <div className="tweetBox__input">
//           <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
//           <input className="tweet__input" placeholder="whats happening" type="text" />
//         </div>

//         <div className="media__icon">
//           <PermMediaIcon />
//         </div>
//         <Button className="tweetBox__tweetButton">Tweet</Button>
//       </form>
//     </div>
//   );
// }

// export default TweetBox;


import React, { useState } from 'react';
import { storage } from '../../firebase';
// import firebase from "firebase";
import './TweetBox.css';
// import { useStateValue } from './StateProvider';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, InputLabel, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from '../../axios'

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {  
        '& .MuiTextField-root': {
            // margin: theme.spacing(1),
            margin: 1,
            // width: '96vh',
        },
    },
    input: {
        display: 'none',
    },
    formControl: {
        // margin: theme.spacing(1),
        margin: 1,
        minWidth: 120,
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
        marginTop: 2,
        // width: 800,
    },
}));

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}
  
LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
  

function TweetBox() {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [img, setImg] = useState(false);
    // const [{user}] = useStateValue();
    const user = "abc"
    const classes = useStyles();

    const postNewTweet = async(imageUrl) => {
        const response = await axios({
            method: 'post',
            url: '/user/tweets',
            data: {
                "createdUserId": 1,
                "text":description,
                "image":imageUrl
            }
        })
        if(response.status === 201) {
            setProgress(0);
            setTitle("");
            setImage(null);
            setDescription("");
            setImg(false);
        } else {
            alert('Some error occured while posting the tweet')
        }
    }
    
    const handleUpload = () => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) *100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        postNewTweet()
                        
                    });
            }
        );
    };


    const imageRef = React.useRef(null);

    function useDisplayImage() {
        const [result, setResult] = React.useState("");

        function uploader(e) {
            const imageFile = e.target.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                setResult(e.target.result);
                setImg(true)
            });

            reader.readAsDataURL(imageFile);
        }

        return { result, uploader };
    }

  const { result, uploader } = useDisplayImage();
  
    

    return (
        <div>
            {user ? (
        
                <div>

                    <div className="newArticle__pageTitle">
                        <span>Post a new Tweet</span>
                    </div>

                    <div className="newArticle__container">


                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={category} 
                            onChange={e => setCategory(e.target.value)}
                            label="Category"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                                <MenuItem value="sports">Sports</MenuItem>
                                <MenuItem value="politics">Politics</MenuItem>
                                <MenuItem value="space">Space</MenuItem>
                                <MenuItem value="technology">Technology</MenuItem>
                                <MenuItem value="travel">Travel</MenuItem>
                                <MenuItem value="fashion">Fashion</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <div className="newArticle__title">

                            <form className={classes.root} noValidate autoComplete="off">
                                <div>
                                <TextField className="newArticle__titleInput" type="text" label="Enter the hastags (#tufaaniProgrammer #onFire)..." variant="outlined" onChange={event => setTitle(event.target.value)} value={title}/>
                            
                                </div>
                            </form>
                            {/* <FormControl variant="outlined" className={classes.root}>
                                </FormControl>
                             */}
                        </div>

                        <div className="newArticle__image">
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                    uploader(e);
                                    }}
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                Choose an Image
                                </Button>
                            </label>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                        
                        {result && img &&
                        <div className="newArticle__imageContainer">
                            <img className="newArticle__imageDisplay" ref={imageRef} src={result} alt="" />
                        </div>
                        }


                        {/* <textarea className="newArticle__description"  placeholder="Enter decription of the article..." /> */}
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    className="newArticle__descriptionInput"
                                    id="outlined-textarea"
                                    label="Description"
                                    placeholder="Placeholder"
                                    multiline
                                    rows={8}
                                    variant="outlined"
                                    onChange={event => setDescription(event.target.value)} 
                                    value={description}
                                />
                            </div>
                        </form>

                        {/* <progress className="newArticle__uploadProgress" value={progress} max="100"/> */}

                        <div>
                            
                            <Button
                                className="newArticle__button" 
                                onClick={handleUpload}
                                variant="contained"
                                color="primary"
                                disabled = {!title || !description || !image || !category}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                            
                        </div>

                        <div className={classes.root}>
                            <LinearProgressWithLabel value={progress} />
                        </div>
                                                
                    </div>
                    
                    
                </div>
        
            ) :
            (
                <p>Please log in to continue</p>
            )
            }
    
        </div>
         
        
    )
}

export default TweetBox;