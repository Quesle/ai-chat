import React from "react";

import { Card, Form, Input } from "antd";

const FormItem = Form.Item;

const Login = () => {
  return (
    <Card title="登陆" bordered={false} style={{ width: 300 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem name="username" label="名称">
          <Input />
        </FormItem>
        <FormItem name="password" label="密码">
          <Input.Password />
        </FormItem>
      </Form>
    </Card>
  );
};

export default Login;
