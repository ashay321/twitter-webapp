import React from "react";
import "./SidebarOption.css";
export default function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions__active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
