import { IconButton, Avatar } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React, { useState } from 'react'
import './MessagesSidebar.css'
import SidebarChat from './SidebarChat'

function MessagesSidebar() {

    const [rooms, setRooms] = useState([{id: 1, data:{name:"Ashay"}}, {id: 1, data:{name:"Nitesh"}}])

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
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default MessagesSidebar