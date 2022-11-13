import React from 'react'
import SidebarOption from '../../Sidebar/SidebarOption';
import './AdminSideBar.css';
import  HomeIcon from "@mui/icons-material/Home";
function AdminSideBar() {
  return (
    <div className='admin__sideBar'>
        <div>
            {/* <HomeIcon /> */}
           <SidebarOption Icon={<HomeIcon/>}/>
        </div>
    </div>
  )
}

export default AdminSideBar