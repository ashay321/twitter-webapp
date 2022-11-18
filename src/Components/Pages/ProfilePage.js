import { Action } from "@remix-run/router";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import ProfilePage from '../Pages/ProfilePage';
import './ProfilePage.css';
// import download from '../Images/download'
import Profilepic from '../Images/Profilepic.png'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker, Space } from "antd";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';


import React, { useEffect } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";

import { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  Modal,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import Feed from "../Feed/Feed";
import { useStateValue } from "../../StateProvider";
import axios from '../../axios'


function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);
  const [dob, setDob] = React.useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);

  const [{ userId }] = useStateValue();
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    let response = await axios.get(`/user/${userId}`)

    if (response.status === 200) {
      setUserData(response.data);
      setName(response.data.name);
      setBio(response.data.bio)
      setDob(response.data.dob);
      setBackgroundImageUrl(response.data.bannerImage);
      setProfileImageUrl(response.data.avatar)
    }
  };

  useEffect(() => {
    getUserData();
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChange = (date, dateString) => {
    setDob(dateString);
  };

  const postUpdatedUserData = async (downloadURL) => {

    let response = await axios.put(`/user`, {
      ...userData,
      name: name,
      bio: bio,
      dob: dob,
      bannerImage: downloadURL
    })
    setOpen(false);
    getUserData();
  }

  const handleUpload = () => {
    const storageRef = ref(storage, `images/${backgroundImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, backgroundImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          postUpdatedUserData(downloadURL)

        });
      }
    );

  };


  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
        // setImg(true)
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  return (
    <div className="profilePage" style={{ padding: "10px 30px" }}>
      <Grid container>
        <Grid item>
          {/* <Grid container spacing={3} display="flex" alignItems="center">
          <Grid item xs={2}>
            <ArrowBackIcon />
          </Grid>
          <Grid item xs={10}>
            <h2 style={{ margin: 0 }}>{userData.name}</h2>
            <Typography variant="caption">0 Tweets</Typography>
          </Grid>
        </Grid> */}
          <Divider />
          {backgroundImageUrl != null ? <img style={{
            // border: "3px solid black",
            // borderRadius: "50%",
            width: "100%",
            height: "190px",
            // margin: "-20px 20px 0px",
            objectFit: "cover"
          }} className="tweetBox__imageDisplay" src={backgroundImageUrl} alt=""

          /> : <Container
            style={{ height: "190px", backgroundColor: "grey" }}
          />
          }
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={userData.avatar}
              alt=""
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "20%",
                margin: "-60px 20px 0px",
                objectFit: "cover"
              }}
            />
            <Button
              variant="outlined"
              size="small"
              style={{ borderRadius: "30px", margin: "10px" }}
              onClick={() => setOpen(true)}
            >
              Edit Profile
            </Button>
            <Modal
              open={open} onClose={() => setOpen(false)}
            // open={isEditing} 
            // onCancel={() => resetEditing()}
            // onOk={() => editResponse()}
            >
              <Paper
                style={{
                  width: "600px",
                  padding: "30px 20px",
                  top: "50%",
                  position: "absolute",
                  borderRadius: "8px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={1}>
                    <CloseIcon onClick={() => setOpen(false)} />
                  </Grid>
                  <Grid item xs={9}>
                    <h2 style={{ margin: 0 }}>Edit Profile</h2>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      size="small"
                      variant="outlined"
                      style={{ borderRadius: "30px", margin: "10px" }}
                      onClick={handleUpload}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    {backgroundImage != null ? <img style={{
                      border: "3px solid black",
                      // borderRadius: "50%",
                      width: "100%",
                      height: "190px",
                      // margin: "-20px 20px 0px",
                      objectFit: "cover"
                    }} className="tweetBox__imageDisplay" ref={imageRef} src={result} alt="" />
                      : backgroundImageUrl != null ? <img style={{
                        // border: "3px solid black",
                        // borderRadius: "50%",
                        width: "100%",
                        height: "190px",
                        // margin: "-20px 20px 0px",
                        objectFit: "cover"
                      }} className="tweetBox__imageDisplay" src={backgroundImageUrl} alt=""

                      /> : <Container
                        style={{ height: "190px", backgroundColor: "grey" }}></Container>
                    }
                    <div className="media__icon" >
                      <div style={{ marginTop: "-90px", marginLeft: "225px" }}>
                        <input
                          accept="image/*"
                          style={{ display: 'none' }}
                          // className={classes.input}
                          id="contained-button-file"
                          onChange={(e) => {
                            setBackgroundImage(e.target.files[0]);
                            uploader(e);
                          }}
                          type="file"
                        />
                        <label htmlFor="contained-button-file">
                          <IconButton color="primary" aria-label="upload picture" component="span">
                            <AddAPhotoIcon />
                          </IconButton>
                        </label>
                      </div>


                    </div>
                    <img
                      src={userData.avatar}
                      alt=""
                      style={{
                        border: "3px solid black",
                        borderRadius: "50%",
                        width: "20%",
                        margin: "-20px 20px 0px",
                        objectFit: "cover"
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField defaultValue={userData.name} label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField defaultValue={userData.bio} label="Bio" multiline maxRows={3} fullWidth value={bio} onChange={(e) => setBio(e.target.value)} />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField label="Location" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Website" variant="outlined" fullWidth />
                  </Grid> */}
                  <Grid item xs={12}>
                    <Typography variant="caption">Date of birth{" "}</Typography>
                    <Space direction="vertical" className="date">
                      <DatePicker onChange={onChange} getPopupContainer={(triggerNode) => {
                        return triggerNode.parentNode;
                      }} />
                    </Space>
                    <h2 style={{ margin: 0 }}>{new Date(dob).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</h2>
                  </Grid>
                  {/* <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                  > */}
                  {/* <h3 style={{ margin: 0 }}>
                      Switch To Professional Account
                    </h3> */}
                  {/* <ChevronRightIcon />
                  </Grid> */}
                </Grid>
              </Paper>
            </Modal>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2 style={{ margin: 0 }}>{userData.name}</h2>
              <Typography variant="caption">@{userData.userName}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <CalendarMonthIcon fontSize="14px" />
              <Typography
                variant="caption"
                style={{ fontSize: "14px", marginLeft: "10px" }}
              >
                Joined {" "}
                {new Date(userData.createdAt).toDateString().split(' ')[1]} {" "}
                {new Date(userData.createdAt).toDateString().split(' ')[3]}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {userData.numberOfFollowing}
              <Typography
                variant="caption"
                style={{ fontSize: "14px", marginLeft: "4px" }}
              >
                Following
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {userData.numberOfFollower}
              <Typography
                variant="caption"
                style={{ fontSize: "14px", marginLeft: "4px" }}
              >
                Followers
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Tweets"
                  style={{ margin: "0px 20px" }}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Tweets & Replies"
                  style={{ margin: "0px 20px" }}
                  {...a11yProps(1)}
                />
                <Tab
                  label="Media"
                  style={{ margin: "0px 20px" }}
                  {...a11yProps(2)}
                />
                <Tab
                  label="Likes"
                  style={{ margin: "0px 20px" }}
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Feed />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item four
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default ProfilePage;