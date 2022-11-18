import * as React from "react";
import { Button } from "@mui/material";
import { DatePicker, Space } from "antd";
import freetwitter from "../../Asserts/Images/freetwitter.png";
import axios from '../../axios'
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dob, setDob] = React.useState("");
  let navigate = useNavigate();
  // const [] = React.useState("")

  const signup = async() => {
    const data = {
      userName:username,
      name:name,
      password:password,
      dob:dob,
      isVerified: 1,
      avatar: ""
    };

    let response = await axios.post(
      '/signup',
      data
    );

    if(response.status === 200) {
      alert("Account created successfully. Please login.")
      navigate('/login');
    } else {
      alert(response.data);
    }
  }

  const onChange = (date, dateString) => {
    setDob(dateString);
  };

  return (
    <div className="signUp__page">
      <div className="header">
        <div className="header-primary">
          <div className="left_side">
            <h2>Create Your new Account</h2>
            <div className="input__fields">
              <input className="input" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <input className="input" placeholder="UserName" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input className="input" placeholder="Email" type="email" />
              <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="dateOfBirth">
              <h3>Date of birth</h3>
              <span className="text">
                This will not be shown publicly. Confirm your own age  even if
                this account is <br />for a business, a pet, or something else.
              </span>
            </div>
            <Space direction="vertical" className="date">
              <DatePicker onChange={onChange}/>
            </Space>
          </div>
          <div className="logo">
            <img src={freetwitter} alt="twitter logo" className="twitter__logo" />
          </div>
        </div>
          <Button variant="contained" className="submit__btn" onClick={signup}>Submit</Button>
      </div>
    </div>
  );
}

export default SignupPage;
