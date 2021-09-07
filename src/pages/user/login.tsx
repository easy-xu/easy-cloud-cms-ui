import React, { FC } from 'react';
import { Form, Input, Button, Checkbox, Card, PageHeader } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect, ConnectProps, Dispatch } from 'umi';
import { useRequest } from 'umi';
import { loginRequest } from '@/services/user';

import './login.less';

interface UserLoginProps extends ConnectProps {
  user: any;
  dispatch: Dispatch;
}

const UserLogin: FC<UserLoginProps> = ({ user, dispatch }) => {
  const { data, error, loading, run } = useRequest(
    (params) => loginRequest(params),
    {
      manual: true,
      onSuccess: (result, params) => {
        console.log(result, params);
      },
    },
  );

  const onFinish = (values: any) => {
    console.log('user', user);
    console.log('Success:', values);
    run(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-div">
      <Card>
        <PageHeader className="site-page-header" title="用户登录" />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '用户名不能为空' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密 码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/user/lost">
              忘记密码
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登 录
            </Button>
            没有账号？<a href="/user/signin">立即注册</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default connect(({ user }: { user: any }) => ({
  user,
}))(UserLogin);
