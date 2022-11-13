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


import React from "react";
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
  } from "@mui/material";

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
function ProfilePage() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   return (
    <div style={{ padding: "10px 30px" }}>
    <Grid container>
      <Grid item>
        <Grid container spacing={3} display="flex" alignItems="center">
          <Grid item xs={2}>
            <ArrowBackIcon />
          </Grid>
          <Grid item xs={10}>
            <h2 style={{ margin: 0 }}>Dummy</h2>
            <Typography variant="caption">0 Tweets</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Container
          style={{ height: "190px", backgroundColor: "lightgray" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={Profilepic}
            alt=""
            style={{
              border: "3px solid black",
              borderRadius: "50%",
              width: "20%",
              margin: "-60px 20px 0px",
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
                      onClick={() => setOpen(false)}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Name" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Bio" multiline maxRows={3} fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Location" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Website" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Birth date</Typography>
                    <Button>Edit</Button>
                    <h2 style={{ margin: 0 }}>December 14,2000</h2>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {/* <h3 style={{ margin: 0 }}>
                      Switch To Professional Account
                    </h3> */}
                    <ChevronRightIcon />
                  </Grid>
                </Grid>
              </Paper>
            </Modal>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 style={{ margin: 0 }}>Dummy</h2>
            <Typography variant="caption">@Dummy</Typography>
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
              Joined 12-10-2022
            </Typography>
          </Grid>
          <Grid item xs={2}>
            1
            <Typography
              variant="caption"
              style={{ fontSize: "14px", marginLeft: "4px" }}
            >
              Following
            </Typography>
          </Grid>
          <Grid item xs={2}>
            0
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
            Item One
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

export default ProfilePage;