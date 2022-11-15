import * as React from "react";
import { Button } from "@mui/material";
import { DatePicker, Space } from "antd";
import freetwitter from "../../Asserts/Images/freetwitter.png";

import "./SignUpPage.css";
function SignupPage() {
  return (
    <div className="signUp__page">
      <div className="header">
        <div className="header-primary">
          <div className="left_side">
            <h2>Create Your new Account</h2>
            <div className="input__fields">
              <input className="input" placeholder="Name" type="text" />
              <input className="input" placeholder="UserName" type="text" />
              <input className="input" placeholder="Email" type="email" />
              <input className="input" placeholder="Password" type="password" />
            </div>
            <div className="dateOfBirth">
              <h3>Date of birth</h3>
              <span className="text">
                This will not be shown publicly. Confirm your own age  even if
                this account is <br />for a business, a pet, or something else.
              </span>
            </div>
            <Space direction="vertical" className="date">
              <DatePicker />
            </Space>
          </div>
          <div className="logo">
            <img src={freetwitter} alt="twitter logo" className="twitter__logo" />
          </div>
        </div>
          <Button variant="contained" className="submit__btn">Submit</Button>
      </div>
    </div>
  );
}

export default SignupPage;
