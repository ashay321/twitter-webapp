import React, { useState } from "react";
import "./LoginPage.css";
import twitter from "../../Asserts/Images/twitter.png";
import { Form, Input, Checkbox, Button } from "antd";
import axios from "../../axios"
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{userId}, dispatch] = useStateValue();
  let navigate = useNavigate();

  const login = async() => {
    let response = await axios.post(`/login?username=${username}&password=${password}`,)

    if(response.status === 200) {
      let userResponse = await axios.get(`/user/username/${username}`);

      dispatch({
        type: "SET_USER",
        userId: userResponse.data.userId
      })

      handleLocalStorage(userResponse.data.userId);
      
      userResponse.data.roles 
      ? navigate("/admin")
      : navigate("/home");
    } else {
      alert("Invalid username or password")
    }
  }


  const handleLocalStorage = (user_id) => {
    localStorage.setItem('userId', user_id)
  }

  return (
    <div className="login-page">
      <div className="login-box">
        
        <Form name="login-form" initialValues={{ remember: true }}>
          <p className="form-title">Welcome</p>
          <p>Login to the Twitter Account</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={login}
            >
              LOGIN
            </Button>
            <div className="signUp__page" onClick={() => navigate('/signup')}>
              Don't have an Account?
              <span className="signUp__here__btn">Signup</span>
            </div>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default Login;
