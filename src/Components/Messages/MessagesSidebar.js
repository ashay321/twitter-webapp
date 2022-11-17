import { IconButton, Avatar } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React, { useEffect, useState } from 'react'
import './MessagesSidebar.css'
import SidebarChat from './SidebarChat'
import axios from '../../axios'
import { useStateValue } from '../../StateProvider';

function MessagesSidebar() {

    const [rooms, setRooms] = useState([])
    const [{userId}] = useStateValue();

    const getAllRooms = async() => {
       let response = await axios.get(`/user/message/${userId}`);
        
       if(response.status === 200) {
        setRooms(response.data);
       }
    }
    useEffect(() => {
        getAllRooms();
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                Previous Chats
            </div>
            
            {/* <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div> */}

            <div className="sidebar__chats">
                {/* <SidebarChat/> */}
                {rooms.map(room => (
                    <SidebarChat key={room.userId} receiverId={room.userId} name={room.name}/>
                ))}
            </div>
        </div>
    )
}

export default MessagesSidebar