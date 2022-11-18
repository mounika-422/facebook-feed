import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import trash from './trash.svg';
import like from './like.svg';
import dislike from './dislike.svg';
import edit from './edit.svg';
const Feed = () => {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('');
    //const [post,setPost]=useState('');
    // const [image,setImage]=useState(null);
    const [postList,updatePostList]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault();
        setText(text);
       // setPost(prevState=>[...prevState,text]);
        postList.push({description:text});
        updatePostList(postList);
        setText("");
    }
    const editPost=()=>{
      setText(prevState=>[...prevState,text]);
     // postList=[...text]
      updatePostList(postList);
    }
    const deleteFeed=(index)=>{
      const newPostList= postList.filter((item,i)=>i!==index);
      updatePostList(newPostList)
    }

    const LikeFeed=(index)=>{
      postList.map((item,i)=>{
        i===index?setCount(prevCount=>prevCount+1)
        :setCount(prevCount=>prevCount+0)
      })
        
    }
    const dislikeFeed=(index)=>{
        setCount(prevCount=>prevCount-1);
    }
  return (
    <div className='feed'>
      <header >
      <p className='header'>Facebook Feed page</p>
      </header>
      <form onSubmit={handleSubmit}>
        <label className='textarea'>Enter feed:</label>
          <textarea 
            className='feed-input'
            type='text'
            placeholder="what's on your mind?"
            onChange={(e)=>setText(e.target.value)}
            value={text}
        /><br/>
       
        <input
            type='file'
            accept="image/*"
            style={{display:'none'}}
            id="contained-button-file"
            // onChange={(e)=>setImage(e.target.files[0])}
        />
        <label htmlFor='contained-button-file'>
          <Button variant='contained' color='primary' component='span'>Upload</Button>
        </label>
        <button 
            type='submit'
            className='post-btn'>
              Post
            </button>
      </form>
      <br/><br/>
      <div>
        {text && <p>{text}</p>}
      {postList?.length ? postList.map((post,index)=>
      <ListItem  index={index} post={post} editPost={editPost} deleteFeed={deleteFeed} Likefeed={LikeFeed} dislikeFeed={dislikeFeed} />):<p>Post anything</p>}
      </div>
      </div>
  )
}
const ListItem=(props)=>{
  <div className='list-item row jc-space-between' >
      <span>{props.post.description}</span>
      <img className='delete-icon' src={trash} alt='trash-bin' 
      onClick={()=>props.deleteFeed(props.index)}/>  
      <img className='like-icon' src={like} alt='like'
      onClick={()=>props.LikeFeed(props.index,props.count)}>{props.count}</img>
       <img className='dislike-icon' src={dislike} alt='dislike'
      onClick={()=>props.disLikeFeed(props.index,props.count)}>{props.count}</img>
       <img className='edit-icon' src={edit} alt='edit'
      onClick={()=>props.editPost(props.index)}/>
  </div>
}
export default Feed;