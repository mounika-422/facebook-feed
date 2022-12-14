import React from 'react'
import Post from '../post/Post'
import Share from '../shared/Share'
import './feed.css'
import {Posts} from '../../dummyData'

function Feed() {
  return (
    <div className='feedbar'>
      <div className="feedWrapper">
        <Share/>

        {Posts.map((p)=>(
        <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
export default Feed
