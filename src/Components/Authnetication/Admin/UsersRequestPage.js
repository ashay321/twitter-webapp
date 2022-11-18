import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./UsersRequestPage.css";
import axios from "../../../axios"

function UsersRequestPage() {

  const [verificationRequests, setVerificationRequests] = useState([]);

  const getVerificationRequests = async() => {
    let response = await axios.get("/admin/bluetick");

    if(response.status === 200) {
      setVerificationRequests(response.data)
    }
  }

  const acceptVerificationRequest = async(userIdToBeVerified) => {
    let response = await axios.put(`/admin/bluetick/status/${userIdToBeVerified}/true`);
    getVerificationRequests();
  }

  const rejectVerificationRequest = async(userIdToBeVerified) => {
    let response = await axios.put(`/admin/bluetick/status/${userIdToBeVerified}/false`);
    getVerificationRequests();
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
              return <tr key={request.userId}>
                <td>{request.name}</td>
                <td>Request</td>
                <td>
                  <Button style={{marginRight: 10}} variant="contained" color="primary" component="span" onClick={() => acceptVerificationRequest(request.userId)}>Accept</Button>
                  <Button style={{marginRight: 10}} variant="contained" color="primary" component="span" onClick={() => rejectVerificationRequest(request.userId)}>Decline</Button>
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
