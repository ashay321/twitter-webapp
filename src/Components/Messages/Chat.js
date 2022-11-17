import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import "./Chat.css";
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useParams } from 'react-router-dom';
import {useStateValue} from "../../StateProvider";
import axios from '../../axios';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{userId}, dispatch] = useStateValue();

    const getAllMessages = async() => {
        let response = await axios.get(`/user/message/1/2`);

        if(response.status === 200) {
            console.log(response.data.length)
            setMessages(response.data);
        }
    }

    useEffect(()=>{
        getAllMessages();
    },[])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <div className="chat">
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat__headerInfo'>
                    <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()
                            ).toUTCString()}
                    </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (            
                    <p className={`chat__message ${ message.senderId === userId && 'chat__receiver'}`}>
                        <span className="chat__name">{"Ashay"}</span>
                        {message.text}
                        <span className="chat__timestamp">{new Date(message.messageDate).toUTCString()}</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat