import { Box, Button, Input, Modal, TextField } from "@mui/material";
import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import SettingCard from "./SettingCard";
import './SettingsPage.css';

function SettingsPage() {
  const [logoutModal, setLogoutModal] = useState(false);
  const [verificationModal, setVerificationModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [{userId}, dispatch] = useStateValue();
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordModal, setPasswordModal] = useState(false)
  const [deactivateModal, setDeactivateModal] = useState(false);

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
    setLogoutModal(false);
  }

  const handleVerification = async() => {
    let response = await axios.put(`/user/bluetick/${userId}`);

    if(response.status === 200) {
      getUserData();
    }
    setVerificationModal(false);
  }

  const getUserData = async() => {
    let response = await axios.get(`/user/${userId}`);

    if(response.status === 200) {
      setUserData(response.data);
    }
  }

  const changePassword = async() => {
    let response = await axios.put(`/user`, {
      ...userData,
      password: password
    })
    if(response.status === 200) {
      alert("Password changed successfully")
    }
    setPasswordModal(false);
  }

  const deleteUser = async() => {
    let response = await axios.delete(`/user/${userId}`);

    if(response.status === 200) {
      dispatch({
        type: "SET_USER",
        userId: null
      })
      
      localStorage.removeItem('userId');
      navigate('/login');
    }
  }

  useEffect(() => {
    getUserData();
  },[])

  return <div>
    <div >
        <h2 className="Settings">Settings</h2>
        {/* <SearchIcon />
        <input placeholder="Search Settings"/> */}

    </div>
    <div>
      <SettingCard title={"Change Profile details"} onClick={() => navigate('/profile')}/>
      <SettingCard title={"Change Password"} onClick={() => setPasswordModal(true)}/>
      <SettingCard title={"Request Verification"} onClick={() => setVerificationModal(true)}/>
      <SettingCard title={"Logout"} onClick={() => setLogoutModal(true)}/>
      <SettingCard title={"Deactivate your account"}  onClick={() => setDeactivateModal(true)}/>

      <Modal
        open={logoutModal}
        onClose={() => setLogoutModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box" sx={style}>
          Are you sure you want to logout?
          <div className="">
            <Button variant="contained" onClick={handleLogout}>Yes</Button>
            <Button onClick={() => setLogoutModal(false)}>No</Button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={verificationModal}
        onClose={() => setVerificationModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          userData.isVerified === 1
          ? <Box className="modal-box" sx={style}>
              Are you sure you want to request for verification?
              <div className="">
                <Button variant="contained" onClick={handleVerification}>Yes</Button>
                <Button onClick={() => setVerificationModal(false)}>No</Button>
              </div>
            </Box>
          : userData.isVerified === 2 ? 
           <Box className="modal-box" sx={style}>
              Verification Request Pending.
           </Box> : <Box className="modal-box" sx={style}>
              Your account is already verified!
           </Box>
        }
      </Modal>

      <Modal
        open={passwordModal}
        onClose={() => setPasswordModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          <Box className="modal-box" sx={style}>
              <TextField label={"Enter new password"} value={password} onChange={(e)=> setPassword(e.target.value)} style={{marginBottom: "10px"}}/>
              <div className="">
                <Button variant="contained" onClick={changePassword}>Submit</Button>
                <Button onClick={() => setPasswordModal(false)}>Cancel</Button>
              </div>
            </Box>
      </Modal>

      <Modal
        open={deactivateModal}
        onClose={() => setDeactivateModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box" sx={style}>
          Are you sure you want to delete your account?
          <div className="">
            <Button style={{ backgroundColor: '#EE4B2B'}} variant="contained" onClick={deleteUser}>Yes</Button>
            <Button onClick={() => setDeactivateModal(false)}>No</Button>
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
