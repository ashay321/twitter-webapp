import React from "react";
import SidebarOption from "../../Sidebar/SidebarOption";
import "./AdminSideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
function AdminSideBar() {
  return (
    <div className="admin__sideBar">
      <div className="sidebar__list">
        <SidebarOption Icon={<HomeIcon />} text="Home" />
        <SidebarOption Icon={<PeopleAltIcon />} text="Users" />
        <SidebarOption Icon={<GroupAddIcon />} text="Requests" />
      </div>
    </div>
  );
}

export default AdminSideBar;
