import React from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
import {Users} from '../../dummyData'
export default function Post({post}) {
  console.log(post.userId)
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img 
                 className='postProfileImg' 
                 alt="person4"  
                //  src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture}
                 />
                <span className='postUsername'>
                  {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
                </span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert className='moreVert'/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="person5" className='postImg' />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/person/like.png" className='likeIcon'  alt="like" />
                <img src="/assets/person/love.png" className='likeIcon' alt="love" />
                <span className="postLikeCounter">{post.like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.Comment}</span>
            </div>
        </div>
      </div>
    </div>
  )
}