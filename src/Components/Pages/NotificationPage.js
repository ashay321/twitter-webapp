import React, { useState, useEffect } from "react";
import "./NotificationPage.css";
import NotificationCard from "./NotificationCard";

export default function Notification() {
  //const [notifications, setNotifications] = useState([]);

  const getAllNotifications = async () => {
    // axios
    //   .get(`/user/notification/${userId}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setNotifications(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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

      <NotificationCard />
      {/* <NotificationCard notifications={notifications} /> */}
    </div>
  );
}
