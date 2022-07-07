import React, { Component,useState, useEffect } from 'react'
import { Slider, Switch } from 'antd';

import './index.scss';
import Delete from '../../assets/images/icon-delete.png'
import Edit from '../../assets/images/icon-edit.png'
import Editor from '../../components/editor'
import Right1 from '../../assets/images/icon-right1.png'
import Close from '../../assets/images/icon-close.png'
import Img1 from '../../assets/images/image1.png'
import Img2 from '../../assets/images/image2.png'
import Img3 from '../../assets/images/image3.png'
import Img4 from '../../assets/images/image4.png'
import Play from '../../assets/images/icon-play.png'

import {useLocation} from 'react-router-dom'

export default function Post () {

    let {state: {title, postText}} = useLocation();
    const [postTextData, setPostTextData] = useState('');
    const [titleData, setTitleData] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    

    // const [update, setUpdate] = useState(true);
    useEffect(() => {
        if (postTextData == '' && titleData == '') {
            setPostTextData(postText);
            setTitleData(title);
        }
    })

    // 富文本文字改变后实时更新当前数据
    function editorChange(data) {
        setData(data);
    }
    

    // 富文本弹框保存事件
    function save() {
        setPostTextData(data.richText);
        setTitleData(data.title);
        setShowModal(false)
    }

    // 显示富文本弹框
    function modalShow() {
        title = titleData;
        postText = postTextData;
        setShowModal(true);
    }

    return (
        <div className="post-container">
            <div className="post-title">
                <div className="left">Orci varius natoque penatibus et magnis</div>
                <span className="delete"><img src={Delete}  /></span>
                <span className="edit" onClick={() => modalShow()}> <img src={Edit} width="12" height="12"/> Edit</span>
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: titleData}}></h3>
            <div style={{paddingRight:20, paddingLeft:20}} dangerouslySetInnerHTML={{ __html: postTextData}}></div>
            {showModal ? <div className="edit-modal">
                <h3>Eidt Post</h3>
                <Editor text={postTextData} title={titleData}  editorChange={editorChange} />
                <div className="btn-wrap">
                    <div className="save" onClick={() => save()}><img src={Right1} width="19" height="15" /><span>Save</span></div>
                    <div className="cancel" onClick={() => {setShowModal(false)}}><img src={Close} width="14" height="14" />Cancel</div>
                </div>
            </div> : null}
            <div className="player">
                <div className="play-btn"><img src={Play} width="12" /></div>
                <div className="progress">
                    <Slider defaultValue={30} max={200} tooltipVisible={false}  />
                    <span className="left num">10:00</span>
                    <span className="right num">-30:00</span>
                </div>
            </div>
            <div className="image-wrap">
                <div>
                    <img src={Img1} />
                    <img src={Img3} />
                </div>
                <div>
                    <img src={Img2} />
                    <img src={Img4} />
                </div>
            </div>
           
        </div>
    )
}
