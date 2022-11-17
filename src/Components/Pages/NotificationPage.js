import React, { useState, useEffect } from "react";
import "./NotificationPage.css";
import NotificationCard from "./NotificationCard";
import { useStateValue } from "../../StateProvider";
import axios from "../../axios"

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [{userId}] = useStateValue();

  const getAllNotifications = async () => {
    let res= await axios.get(`/user/notification/${userId}`)

    setNotifications(res.data)
    console.log(res.data)
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <div>
      <div className="notifications__bar">
        <span className="header__secondary">Notification</span>
      </div>
      <hr className="bar" />

      {
        notifications.map(notification => {
          return <NotificationCard 
            avatar={notification.user.avatar}
            username={notification.user.userName}
            msg={notification.msg}
          />
        })
      }
    </div>
  );
}
