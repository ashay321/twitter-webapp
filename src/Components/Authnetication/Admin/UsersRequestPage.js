import React from "react";
import Button from "@mui/material/Button";
import "./UsersRequestPage.css";
function UsersRequestPage() {
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
          <tr>
            <td>Kunal</td>
            <td>Request</td>
            <td>
              <Button>Accept</Button>
              <Button>Decline</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersRequestPage;
