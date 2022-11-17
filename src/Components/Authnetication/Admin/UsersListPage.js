import React, { useEffect, useState } from "react";
import "./UserListPage.css";
import axios from "../../../axios";

function UsersPage() {
  const [users, setUsers] = useState([]);

  const getUsersData = async() => {
    let response = await axios.get("/user")

    if(response.status === 200) {
      // console.log(respo)
      setUsers(response.data);
    }
  }

  useEffect(() => {
    getUsersData();
  },[])

  return (
    <div className="users__list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Username</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Tweets</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
              return <tr>
                <td>{user.name}</td>
                <td>{user.dob}</td>
                <td>{user.userName}</td>
                <td>{user.numberOfFollower}</td>
                <td>{user.numberOfFollowing}</td>
                <td>...</td>
                <td>...</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
