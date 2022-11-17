import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({receiverId, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");
    
    useEffect(() => {
        
    }, []);

    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    return true ? (
        <Link to={`/messages/${receiverId}`} key={receiverId}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    {/* <p>Last message...</p> */}
                    {/* <p>{messages[0]?.message}</p> */}
                </div>
            </div>
        </Link>
        
    ) : (
        <div  className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    )
}

export default SidebarChat