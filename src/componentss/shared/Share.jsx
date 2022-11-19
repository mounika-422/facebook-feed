import React from 'react'
import './share.css'
import {PermMedia} from '@material-ui/icons';
function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/2.jpg" alt="person4" className="shareProfileImg" />
                <input placeholder="what's on your mind" className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon'/>
                        <span className="shareOptionText">Photo/video</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
export default Share
