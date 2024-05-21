import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Checkbox, Button, Modal, Card } from 'antd';
import Navbar from '../layout/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../user/dashboard/Footer';

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Signup.loading);
  const error = useSelector((state) => state.Signup.error);

  const [username, setUsername] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [email, setEmail] = useState('');
  const [conformpassword, setConformpassword] = useState('');
  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Signup(username, newpassword, email, conformpassword));
  };

  const handleForgotPassword = () => {
    setForgotPasswordModalVisible(true);
  };

  const handleForgotPasswordModalClose = () => {
    setForgotPasswordModalVisible(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
      if (activeDropdown === id) {
          setActiveDropdown(null);
      } else {
          setActiveDropdown(id);
      }
  };
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    if (item.path) {
        navigate(item.path);
    } else {
        // Handle other item click actions
        console.log(`Clicked on ${item.name}`);
    }
};

  const info = [
      {
          name: 'Places to go',
          path: '',
          id: 1
      },
      {
          name: 'Things to do',
          id: 2
      },
      {
          name: 'Festivals & Events',
          id: 3
      },
      {
          name: 'Plan Your Trip',
          id: 4
      },
      {
        name: 'TravelUpdates',
        path: '/travelupdate',
        id: 5
    },
  ];

  return (
    <div className="container mx-auto relative">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} info={info} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} handleItemClick={handleItemClick}  />
    <div className="flex justify-center h-screen items-center">
      <Card title="SignUp" className="login-form">
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newpassword"
            rules={[
              {
                required: true,
                message: 'Please input your new password!',
              },
            ]}
          >
            <Input.Password value={newpassword} onChange={(e) => setNewpassword(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="conformpassword"
            dependencies={['newpassword']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newpassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password value={conformpassword} onChange={(e) => setConformpassword(e.target.value)} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="link" onClick={handleForgotPassword}>
              Forgot Password
            </Button>
          </Form.Item>

          {error && <div className="error">{error}</div>}

          {/* Forgot Password Modal */}
          <Modal
            title="Forgot Password"
            visible={forgotPasswordModalVisible}
            onCancel={handleForgotPasswordModalClose}
            footer={null}
          >
            <Form layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          
        </Form>
      </Card>
    </div>
    <div className=' md: pt-20'>  <Footer/> </div>
    </div>
  );
};

export default Signup;
