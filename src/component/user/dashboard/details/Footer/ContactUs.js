import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PlacesToGo from '../../../../nav/PlacesToGo';
import ThingsToDo from '../../../../nav/ThingsToDo';
import PlanYourTrip from '../../../../nav/PlanYourTrip';
import Navbar from '../../../../layout/Navbar';
import { Button, Card, Form, Input } from 'antd';
import Footer from '../../Footer';
import { Contact } from '../../../../redux/action/querieThunk';
import TextArea from 'antd/es/input/TextArea';

const ContactUs = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contact.loading);
  const error = useSelector((state) => state.contact.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (values) => {
    try {
      await dispatch(Contact(values));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else {
      console.log(`Clicked on ${item.name}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const info = [
    {
      name: 'Places to go',
      component: PlacesToGo,
      id: 1
    },
    {
      name: 'Things to do',
      component: ThingsToDo,
      id: 2
    },
    {
      name: 'Plan Your Trip',
      component: PlanYourTrip,
      id: 4
    },
    {
      name: 'TravelUpdates',
      path: '/travelupdate',
      id: 5
    },
  ];

  return (
    <div>
      
      <div className="container mx-auto relative">
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          info={info}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          handleItemClick={handleItemClick}
        />

<div className=' md: flex justify-around py-8 bg-slate-50'>
        <div ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904319.5553383824!2d84.09751877812496!3d27.701898200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19abb6cf1d19%3A0xe53f5b44cc5c9325!2sNepal%20Tourism%20Board!5e0!3m2!1sen!2snp!4v1716050089107!5m2!1sen!2snp" 
        width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        <div>
          <div className=' col-span-10 py-20'>
                 Nepal Tourism Board</div>
          <div className=' flex py-5'>
           <div ><h1>Bhrikutimandap, </h1>
<h1>Kathmandu</h1>
<h1>P.O. Box: 11018</h1>
</div>
           <div >
            <h1>Tel: +977 1 4256909</h1>
            <h1>Fax: +977 1 4256910</h1>
            <h1>E-mail: info@ntb.org.np</h1>
           </div>
          </div>
          <div><p></p></div>
        </div>
      </div>
        <div className="flex justify-center h-screen items-center">
          <Card title="Send us your queries" className="login-form">
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' }
                ]}
              >
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' }
                ]}
              >
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Number"
                name="number"
                rules={[
                  { required: true, message: 'Please input your number!' }
                ]}
              >
                <Input value={number} onChange={(e) => setNumber(e.target.value)} />
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
            
          </Form.Item>
          
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
               <TextArea className=' h-72 ' > 
       <h1 className=' font-varela text-xl '></h1>

       </TextArea>
       
           
          </Form.Item>
       
    

              <Form.Item className=' py-11'>
                <Button className='' type="primary" htmlType="submit" loading={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </Form.Item>

              {error && <div className="error">{error}</div>}
            </Form>
           
          </Card>
        </div>
        <div className='md:pt-20'><Footer /></div>
      </div>
    </div>
  );
}

export default ContactUs;
