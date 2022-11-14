import React from "react";
import "./UserListPage.css";
function UsersPage() {
  return (
    <div className="users__list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Tweets</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>anomol@gmail.com</td>
            <td>30</td>
            <td>50</td>
            <td>60</td>
            <td>150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
