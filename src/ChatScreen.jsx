import React from 'react'
// import {Link} from 'react-router-dom'
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import './ChatScreen.css'
function ChatScreen() {
    return (
        <>
            <div className='container-fluid'>
                <div className="row mrow">

                    <div className="col-md-5 col5">
                        <div className="row">
                            <div className="col-12 rghtnav">
                                <h5 className='rghth5'>ConnectTrue</h5>
                                <span className='span'> Welcome : Zainy</span>
                                <div class="form-check form-switch toggle">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault">login/out</label>
                                </div>
                            </div>
                            <div className="col-12 left2">
                                <div className="row">
                                    <div className="col-12 mycht">My Chats</div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12 cht">
                                                <img src={require('./profile.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Sana
                                                    <div className="row">
                                                        <div className="col offset-2 of1 ">
                                                           Hi where are u??
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-12">
                                                <img src={require('./profile1.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Farhan
                                                    <div className="row">
                                                        <div className="col offset-2 of1">
                                                            Soon i will update about this..
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-12 cht">
                                                <img src={require('./profile5.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Vinay Sir
                                                    <div className="row">
                                                        <div className="col offset-2 of1">
                                                            ok
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-12">
                                                <img src={require('./profile3.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Toseef Afridi
                                                    <div className="row">
                                                        <div className="col offset-2 of1">
                                                            I had already complteted the task!
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-12">
                                                <img src={require('./profile4.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Dr Shariq
                                                    <div className="row">
                                                        <div className="col offset-2 of1">
                                                            Yes sure
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-12">
                                                <img src={require('./profile2.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Aiman Khan
                                                    <div className="row">
                                                        <div className="col offset-2 of1">
                                                            I will reach by 5pm
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="col-12">
                                                <img src={require('./profile6.png.png')} className="img1" alt="" />
                                                <span className='s'>
                                                    Iqra 
                                                    <div className="row">
                                                        <div className="col offset-2 of1">
                                                            Thanks alot for the advice...
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col7">
                        <div className="row arow">
                            <div className="col-12 nav">
                                <img src={require('./profile5.png.png')} className=" profile1" alt="" />
                                <h5 className='head5'>Vinay Sir</h5>
                                <MdCall className='call' />
                                <FaVideo className='vcall' />
                            </div>
                            <div className="col-12 chtbx">
                                <div className="row">
                                    <div className="col-8 msg msg1">ok</div>
                                    <div className="col-8 offset-4 msg msg2">Good Morning Sir</div>
                                    <div className="col-8 msg msg3">Good morning</div>
                                    <div className="col-8 offset-4 msg msg4">i have issue in react</div>
                                    <div className="col-8 msg msg5">ok tell me in the class</div>
                                    <div className="col-8 offset-4 msg msg6">Thank u Sir</div>
                                    <div className="col-8 msg msg7">Wlcm</div>
                                    <div className="col-12 typpanel">
                                        <div class="mb-1 mt-1 rigid">
                                            <input type="text" class="form-control typbx" placeholder="Type ur msg here..." aria-label="fullName" />
                                        </div>
                                        <ImAttachment className='atch' /> <MdOutlineEmojiEmotions className='emoji' /><BsSend className='send' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatScreen