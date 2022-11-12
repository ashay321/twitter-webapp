import React from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarOption.css";
export default function SidebarOption({ active, text, Icon, navigationPath }) {
  let navigate = useNavigate(); 
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions__active"}`} 
        onClick={() => {
          console.log(navigationPath);
          navigate(navigationPath);
        }}>
      <Icon/>
      <h2>{text}</h2>
    </div>
  );
}
