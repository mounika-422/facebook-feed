import React from 'react'
import './rightbar.css'
function Rightbar() {
  return (
    <div className='rightbar'>
     <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img src="/assets/person/gift.png"className='birthdayImg' alt="bday" />
        <span className="birthdayText">
        <b>Pola Foster</b> and <b>3 Other friends</b>have a birthday today
        </span>
      </div>
      <img src="/assets/person/add.jpg" alt="add" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendsList">
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/person/6.jpg" alt="p6" className="rightbarProfileImg" />
            <span className='rightbarOnline'></span>
          </div>
          <span className="rightbarUsername">Prabhas</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/person/7.jpg" alt="p6" className="rightbarProfileImg" />
            <span className='rightbarOnline'></span>
          </div>
          <span className="rightbarUsername">Rashmika</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/person/8.jpg" alt="p6" className="rightbarProfileImg" />
            <span className='rightbarOnline'></span>
          </div>
          <span className="rightbarUsername">sohail</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/person/3.jpg" alt="p6" className="rightbarProfileImg" />
            <span className='rightbarOnline'></span>
          </div>
          <span className="rightbarUsername">Mahesh babu</span>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default Rightbar
