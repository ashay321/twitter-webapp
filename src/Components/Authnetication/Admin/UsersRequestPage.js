import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./UsersRequestPage.css";
import axios from "../../../axios"
import { async } from "@firebase/util";

function UsersRequestPage() {

  const [verificationRequests, setVerificationRequests] = useState([]);

  const getVerificationRequests = async() => {
    let response = await axios.get("/user/bluetick");

    if(response.status === 200) {
      setVerificationRequests(response.data)
    }
  }

  const acceptVerificationRequest = async(userIdToBeVerified) => {
    let response = await axios.get(`/user/bluetick/status/${userIdToBeVerified}`);

  }

  const rejectVerificationRequest = () => {
    
  }

  useEffect(() => {
    getVerificationRequests();
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {
            verificationRequests.map((request) => {
              return <tr>
                <td>{request.name}</td>
                <td>Request</td>
                <td>
                  <Button style={{marginRight: 10}} variant="contained" color="primary" component="span" onClick={acceptVerificationRequest}>Accept</Button>
                  <Button style={{marginRight: 10}} variant="contained" color="primary" component="span" onClick={rejectVerificationRequest}>Decline</Button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default UsersRequestPage;
