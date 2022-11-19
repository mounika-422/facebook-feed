import React from 'react'
import './sidebar.css'
import {RssFeed} from '@material-ui/icons'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Questionss</span>

          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Jobs</span>

          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Events</span>
          </li>
          <li className="sidebarListItem">
              <RssFeed  className='sidebarIcon'/>
              <span className='sidebarListItemText'>Coursess</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John doe</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
