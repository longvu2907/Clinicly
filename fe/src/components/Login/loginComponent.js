import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

export const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      });
      // Handle successful login
      console.log(response);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input className="lg:w-[35rem]" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password className="lg:w-[35rem]" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button
          type="default"
          htmlType="submit"
          size="large"
          shape="round"
          className="bg-primary-100 text-white lg:w-[35rem]"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
