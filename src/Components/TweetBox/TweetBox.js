import { Avatar, Button, Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import axios from '../../axios'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import { PhotoCamera } from "@mui/icons-material";


function TweetBox() {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [description, setDescription] = useState('')
    const [img, setImg] = useState(false);

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
                alert(error.message);
            },
            () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        postNewTweet(downloadURL)
                        
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
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input className="tweet__input" placeholder="What's happening?" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div className="media__icon">
                    <input
                        accept="image/*"
                        style={{display:'none'}}
                        // className={classes.input}
                        id="contained-button-file"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            uploader(e);
                            }}
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PermMediaIcon />
                        </IconButton>
                    </label>
                </div>
                
                {result && img &&
                    <div className="tweetBox__imageContainer">
                        <img className="tweetBox__imageDisplay" ref={imageRef} src={result} alt="" />
                    </div>
                }
                <Button className="tweetBox__tweetButton" onClick={handleUpload}>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;

