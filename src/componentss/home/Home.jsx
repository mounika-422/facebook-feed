import React from 'react'
import './home.css'
import Topbar from '../topbar/Topbar'
import Sidebar from '../../componentss/sidebar/Sidebar'
import Feedbar from '../../componentss/feedbar/Feedbar'
import Rightbar from '../../componentss/rightbar/Rightbar'
export default function Home() {
  return (
    <>
       <Topbar/>
        <div className="homeContainer">
        
           <Sidebar/>
           <Feedbar/>
           <Rightbar/>

        </div>
     
    </>
  )
}
