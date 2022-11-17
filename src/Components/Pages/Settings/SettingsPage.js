import { Box, Button, Modal } from "@mui/material";
import axios from "../../../axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import SettingCard from "./SettingCard";
// import SearchIcon from '@mui/icons-material/Search';
import './SettingsPage.css';

function SettingsPage() {
  const [modal, setModal] = useState();
  const [{userId}, dispatch] = useStateValue();
  let navigate = useNavigate();

  const handleLogout = async() => {
    let response = await axios.get('/logout');

    if(response.status === 200) {
      dispatch({
        type: "SET_USER",
        userId: null
      })
      navigate('/login');
    }
    setModal(false);
  }
  return <div>
    <div >
        <h2 className="Settings">Settings</h2>
        {/* <SearchIcon />
        <input placeholder="Search Settings"/> */}

    </div>
    <div>
      <SettingCard title={"Change Profile details"}/>
      <SettingCard title={"Change Password"}/>
      <SettingCard title={"Logout"} onClick={() => setModal(true)}/>
      <SettingCard title={"Deactivate your account"}/>

      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box" sx={style}>
          Are you sure you want to logout?
          <div className="">
            <Button variant="contained" onClick={handleLogout}>Yes</Button>
            <Button onClick={() => setModal(false)}>No</Button>
          </div>
        </Box>
      </Modal>
    </div>

  </div>;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 900,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 900,
  overflowY: 'scroll',
  borderRadius: 7
};


export default SettingsPage;
