import React, { Component, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './index.scss';
import Editor from '../../components/editor'
import Right from '../../assets/images/icon-right.png'
import Right1 from '../../assets/images/icon-right1.png'
import Copy from '../../assets/images/icon-copy.png'


export default function ManagePost (){
    const navigate = useNavigate()
    const [postText, setPostText] = useState('');
    const [title, setTitle] = useState('');

    // 富文本文字改变实时更新当前数据
    function editorChange(data) {
        setPostText(data.richText);
        setTitle(data.title);
    }

    // 跳转到post详情页
    function jumpPost() {
        navigate('post', {
            state: {title, postText}
        })
    }

    return (
        <div className="manage-container">
            <h3>Manage  post</h3>
            <div className="tip">
                <div className="tip-left">
                    <img src={Right} width="33" />
                </div>
                <div className="tip-right">
                    <p className="link">link to your profile</p>
                    <p className="url">https://twitter.com/p/12345 <img src={Copy} width="19" /></p>
                </div>
            </div>
            <div className="btn-wrap">
                <div className="btn">Settings</div>
                <div className="btn active">Posts<span className="num">4</span></div>
            </div>
            <Editor editorChange={editorChange} />
            <div className="submit-btn" onClick={() => jumpPost()}><img src={Right1} width="19" />Post</div>
        </div>
    )
}
