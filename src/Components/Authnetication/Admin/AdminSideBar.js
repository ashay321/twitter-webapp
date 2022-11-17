import React from "react";
import SidebarOption from "../../Sidebar/SidebarOption";
import "./AdminSideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useNavigate } from "react-router-dom";
function AdminSideBar() {
  let navigate = useNavigate();

  return (
    <div className="admin__sideBar">
      <div className="sidebar__list">
        {/* <SidebarOption Icon={<HomeIcon />} text="Home" navigationPath={"/admin/users"}/> */}
        <SidebarOption Icon={<PeopleAltIcon />} text="Users" navigationPath={"/admin/users"}/>
        <SidebarOption Icon={<GroupAddIcon />} text="Requests" navigationPath={"/admin/requests"}/>
      </div>
    </div>
  );
}

export default AdminSideBar;
