import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.posts}>
            my posts
            <div className={`${s.item} form-floating row g-0`}>
                <textarea className="form-control"
                          placeholder="New Post"
                          id="Post" style={{height: "100px"}}>
                </textarea>
                <label htmlFor="Post">New Post</label>

                <div style={{paddingTop: "10px"}}
                    className="col g-0">
                    <button type="button" class="btn btn-light">Send</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message="Hi, how are you?" countLike="16"/>
                <Post message="It's my firts post" countLike="20"/>
            </div>
        </div>
    )
}

export default MyPosts;