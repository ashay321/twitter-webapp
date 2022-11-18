import { Button } from "@mui/material";
import React from "react";
import "./AdminPage.css";
import freetwitter from "../../../Asserts/Images/freetwitter.png";
import AdminSideBar from "./AdminSideBar";
import UsersPage from "./UsersListPage";
import { useStateValue } from "../../../StateProvider";
import axios from '../../../axios'
import { useNavigate } from "react-router-dom";
// import UsersRequestPage from "./UsersRequestPage";
export default function AdminPage({children}) {
  const [{userId}, dispatch] = useStateValue();
  let navigate = useNavigate();

  const handleLogout = async() => {
    let response = await axios.get('/logout');

    if(response.status === 200) {
      dispatch({
        type: "SET_USER",
        userId: null
      })
      
      localStorage.removeItem('userId');

      navigate('/login');
    }
  }
  return (
    <div className="admin__header">
      <div className="admin__nav">
        <img className="twitter__logo" src={freetwitter} alt="Twiiter logo" />
        <h2>Welcome admin</h2>
        <Button variant="contained" className="twitter__logout" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="list__view">
        <div className="sidebar__list">
          <AdminSideBar />
        </div>
        <div className="users__list">
          {children}
        </div>
      </div>
    </div>
  );
}
