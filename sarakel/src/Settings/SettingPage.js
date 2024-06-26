import React, { } from 'react';
import style from './SettingPage.module.css'
import Account from './Components/Account'
import Profile from './Components/Profile'
import FeedSettings from './Components/FeedSettings'
import SafetyPrivacy from './Components/Safety&Privacy';
import Notifications from './Components/Notifications';
import Emails from './Components/Emails';
import Subscription from './Components/Subscription';
import ChatsMessaging from './Components/Chats&Messaging';
import NavBar from '../HomePage/Components/NavBar/NavBar'
export default function Settings() {
    const [value,setValue] = React.useState(0)
    const tabArray = []
    const actArray = []
    for(let i=0;i<8;i++){
        if (i===value){
        actArray.push(`${style.btn} ${style.active}`)
        tabArray.push(`${style.show}`)
        }
        else{
        actArray.push(`${style.btn}`)
        tabArray.push(`${style.hide}`)
        }
    }
    return(
        <div>
            <NavBar />
            <div className='tabs container'>
                <h3 className={`${style.SettingHeader}`}>User settings</h3>
                <div className="container m-0" >
                    <a className={`${style.li}`} ><button type='button' className={actArray[0]} onClick={()=>{setValue(0)}}>Account</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[1]} onClick={()=>{setValue(1)}}>Profile</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[2]} onClick={()=>{setValue(2)}}>Safety & Privacy</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[3]} onClick={()=>{setValue(3)}}>Feed Settings</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[4]} onClick={()=>{setValue(4)}}>Notifications</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[5]} onClick={()=>{setValue(5)}}>Emails</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[6]} onClick={()=>{setValue(6)}}>Subscriptions</button></a>
                    <a className={`${style.li}`} ><button type='button' className={actArray[7]} onClick={()=>{setValue(7)}}>Chat & Messaging</button></a>
                </div>
                <hr className='m-0'></hr>
                <div className={tabArray[0]}>
                <Account />
                </div>
                <div className={tabArray[1]}>
                <Profile />
                </div>
                <div className={tabArray[2]}>
                <SafetyPrivacy />
                </div>
                <div className={tabArray[3]}>
                <FeedSettings />
                </div>
                <div className={tabArray[4]}>
                <Notifications />
                </div>
                <div className={tabArray[5]}>
                <Emails />
                </div>
                <div className={tabArray[6]}>
                <Subscription />
                </div>
                <div className={tabArray[7]}>
                <ChatsMessaging />
                </div>

            </div>
        </div>  
    )
}
