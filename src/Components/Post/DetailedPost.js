import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Post from './Post';
import axios from "../../axios"
import { async } from '@firebase/util';
import './DetailedPost.css'

function DetailedPost() {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    const setCommentData = async() => {
        const response = await axios.get('/user/tweets/1/comments');

        if(response.status === 200) {
            setComments(response.data);
        }
    }

    useEffect(() => {
        setCommentData();
    },[])

    return (
        <div>
            <Post
                displayName="Ganesh ppk"
                username="Ganesh ppk"
                verified={true}
                text="This is the most awesome tweet of the world!!!"
                avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                image="https://media.gq.com/photos/57eac35d9228bbed3f6f4ee5/16:9/w_2560%2Cc_limit/elon-musk-is-a-rocket.jpg"
            />

            <div className="comments__header">
                Comments
            </div>

            {
                comments.map(comment => {
                    return <Post
                        displayName="Ganesh ppk"
                        username="Ganesh ppk"
                        verified={true}
                        text={comment.commentText}
                        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                        image=""
                    />
                })
            }
            
        </div>
    )
}

export default DetailedPost