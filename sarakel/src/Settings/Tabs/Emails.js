import React from 'react';
import './bootstrap.min.css';
import style from './Account.module.css' 

export default function Emails(){
    return(
        <div className={`${style.tab}`}>
        <div className={`${style.w100}`}>
            <h2 className={`${style.header}`}>Manage Emails</h2>
            <h3 className={`${style.Subheaders}`}>MESSAGES<hr className='mt-2'></hr></h3>
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Private messages</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Chat requests</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>
            <h3 className={`${style.SubheadersSpcl}`}>ACTIVITY<hr className='mt-2'></hr> </h3>
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>New user welcome</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>            
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Comments on your posts</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>           
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Replies to your comments</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>            
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Upvotes on your posts</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>            
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Upvotes on your comments</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>           
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Username mentions</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>          
            <div className={`${style.box} `}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>New followers</h3>
                </div>
                <div className={`${style.SettingToggles} ${style.mb}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>
            <h3 className={`${style.Subheaders}`}>NEWSLETTERS<hr className='mt-2'></hr> </h3>
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Daily Digest</h3>
                </div>
                <div className={`${style.SettingToggles} ${style.mb}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>
            <h3 className={`${style.SubheadersSpcl}`}><hr className='mt-2'></hr> </h3>
            <div className={`${style.box}`}>
                <div>
                    <h3 className={`${style.SettingTopics} ${style.font}`}>Unsubscribe from all emails</h3>
                </div>
                <div className={`${style.SettingToggles}`}>
                    <label className={`${style.switch}`}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    )

}