import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { loginAPI } from './api';
import Cookies from 'js-cookie';

export const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      const user = await loginAPI(email, password);
      Cookies.set('token', user.token, { expires: 7 });
      // Do something with the logged-in user
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  const updateFormData = (event) => {
    if (event.target.type === 'text') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={updateFormData}
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={updateFormData}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit" size="large" shape="round" block className="bg-primary-100 text-white">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
