import React, { useState } from 'react'
import MessagesSidebar from './MessagesSidebar'
import './MessagesPage.css'
import Chat from './Chat'

function MessagesPage() {

    const [rooms, setRooms] = useState([{id: 1, data:{name:"Ashay"}}, {id: 1, data:{name:"Nitesh"}}])

    return (
        <div className='messages'>
            <MessagesSidebar/>
            <Chat/>
        </div>
    )
}

export default MessagesPage