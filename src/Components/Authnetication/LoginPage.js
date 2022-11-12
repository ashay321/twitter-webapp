import React from "react";
import "./Login.css";
import twitter from "../../Asserts/Images/twitter.png";
import { Form, Input, Checkbox, Button } from "antd";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
          className="twitter__image" src={twitter} alt="Login" />
        </div>
        <Form name="login-form" initialValues={{ remember: true }}>
          <p className="form-title">Welcome Elon</p>
          <p>Login to the Twitter Account</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
            <div className="signUp__page">
              Don't have an Account?
              <span className="signUp__here__btn">SignUp here</span>
            </div>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default Login;
