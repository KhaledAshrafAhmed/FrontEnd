import React, { useState, useEffect } from 'react';
import './chats.css'; // Import your CSS file for styling
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import logo_2d from './logo_2d.png'
// import comboBoxIcon from './comboBoxIcon.svg'; // Import the icon for the button

import ReCAPTCHA from 'react-google-recaptcha';

//import {MDBFooter,MDBContainer,MDBCol,MDBRow} from 'mdb-react-ui-kit';

import axios from 'axios';

function Chats() {
    const onChange = (value) => {
        // Here you would handle the verification of the reCAPTCHA value
        console.log("Captcha value:", value);
    }
    const [toggle, setToggle] = useState(1);
    const [toggle2, setToggle2] = useState(1);
    const toggleTab = (index) => {
      setToggle(index);
     }
    
     const toggleTab2 = (index2) => {
      setToggle2(index2);
     }

     const [username, setUsername] = useState('');
     const [subject, setSubject] = useState('');
     const [message, setMessage] = useState('');
 
  //    const sendMessage = async () => {
  //     try {
  //         const response = await axios.post('http://localhost:5000/message/compose', {
  //             to: username,
  //             subject: subject,
  //             message: message
  //         });
  //         console.log('Message sent:', response.data);
  //     } catch (error) {
  //         console.error('Error sending message:', error);
  //     }
  // };

  const deleteMessage = async () => {
    // try {
    //     // You need to pass the message ID to delete the specific message
    //     const messageId = 'YOUR_MESSAGE_ID_TO_DELETE';
    //     const response = await axios.delete(`http://localhost:5000/message/del_msg/${messageId}`);
    //     console.log('Message deleted:', response.data);
    // } catch (error) {
    //     console.error('Error deleting message:', error);
    // }
};

const getUnreadMessages = async () => {
  // try {
  //     const response = await axios.get('http://localhost:5000/message/unread');
  //     console.log('Unread messages:', response.data);
  //     // Handle unread messages as needed
  // } catch (error) {
  //     console.error('Error fetching unread messages:', error);
  // }
};

async function sendMessage(){

//   const response = await axios.post('http://localhost:5000/message/compose', {
//     to: username,
//     subject: subject,
//     message: message
  
// });
}

// async function getUnreadMessages(){
// const promise = await axios.get('http://localhost:5000/message/unread');
// }

const getInboxMessages = async () => {
  // try {
  //     const response = await axios.get('http://localhost:5000/message/inbox');
  //     console.log('Inbox messages:', response.data);
  //     // Handle inbox messages as needed
  // } catch (error) {
  //     console.error('Error fetching inbox messages:', error);
  // }
};

      return (
        <div className="app-container">

     <div className='TopBar'>
      <button className={toggle === 1 ? "menu-button active" : "menu-button" } onClick={() => toggleTab(1)}>Send A Private Message</button>
      <button className={toggle === 2 ? "menu-button active" : "menu-button" } onClick={() => toggleTab(2)}>Inbox</button>
      <button className={toggle === 3 ? "menu-button active" : "menu-button" } onClick={() => toggleTab(3)}>Sent</button>
     </div>
     <div className='MainWindow'>
      <div className={toggle === 1 ?"MainWindow1 active-content": "MainWindow1"}>
          <div className='towindow'>
            <p className='titlebox'>Send A Private Message</p>
            <div className='firsttxt'>
            <p className='titlebox'>to </p><p className='greytxt'>  (username, or /r/name for that subreddit's moderators)</p>
            </div>
            <input id='tobox' className='tobox' value={username} type="text"/>
          </div>
          <div className='subwindow'>
            <p className='titlebox'>subject</p>
            <input id='subbox' className='subbox' value={subject} type="text"/>
          </div>
          <div className='Msgbox'>
            <p className='titlebox'>message</p>
            <input id='msgboxx' className='msgboxx' value={message} rows="1" cols="1" type="text" />
          </div>
          <div className='robotchk'>
           <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={onChange}/>            
           <button id='sendbtn' className='Sendbutton' onClick={sendMessage()}>SEND</button>
          </div>

      </div>

     <div className={toggle === 2 ?"MainWindow2 active-content": "MainWindow2"}>
       <div className='TopBar2'>
        <button className={toggle2 === 1 ? "menu-button2 active" : "menu-button2" } onClick={() => toggleTab2(1)}>All</button>
        <button className={toggle2 === 2 ? "menu-button2 active" : "menu-button2" } onClick={() => toggleTab2(2)}>Unread</button>
        <button className={toggle2 === 3 ? "menu-button2 active" : "menu-button2" } onClick={() => toggleTab2(3)}>Messages</button>
        <button className={toggle2 === 4 ? "menu-button2 active" : "menu-button2" } onClick={() => toggleTab2(4)}>Comment Replies</button>
        <button className={toggle2 === 5 ? "menu-button2 active" : "menu-button2" } onClick={() => toggleTab2(5)}>Post Replies</button>
        <button className={toggle2 === 6 ? "menu-button2 active" : "menu-button2" } onClick={() => toggleTab2(6)}>Username Mentions</button>
       </div>
       <div className='tab2window'>
        
        <div className={toggle2 === 1 ?"tab2-1 active-content2": "tab2-1"}>
          <div><p className='errmsg'>there doesn't seem to be anything here1</p></div>
          </div>

          <div className={toggle2 === 2 ?"tab2-1 active-content2": "tab2-2"}>
          <div><p className='errmsg'>there doesn't seem to be anything here2</p></div>
          </div>

          <div className={toggle2 === 3 ?"tab2-1 active-content2": "tab2-3"}>
          <div><p className='errmsg'>there doesn't seem to be anything here3</p></div>
          </div>

          <div className={toggle2 === 4 ?"tab2-1 active-content2": "tab2-4"}>
          <div><p className='errmsg'>there doesn't seem to be anything here4</p></div>
          </div>

          <div className={toggle2 === 5 ?"tab2-1 active-content2": "tab2-5"}>
          <div><p className='errmsg'>there doesn't seem to be anything here5</p></div>
          </div>

          <div className={toggle2 === 6 ?"tab2-1 active-content2": "tab2-6"}>
          <div><p className='errmsg'>there doesn't seem to be anything here6</p></div>
          </div>

       </div>
     </div>
      <div className={toggle === 3 ?"MainWindow3 active-content": "MainWindow3"}>
       <div className='nocontmsg'>
        <p className='errmsg'>there doesn't seem to be anything here</p>
       </div>
      </div>
     </div>

  {/* <div className='footer'>
    <Footer/>
  </div> */}
      
    </div>


);
}

export default Chats;