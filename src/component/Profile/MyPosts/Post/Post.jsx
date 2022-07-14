import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img style={{marginRight: '10px'}}
                src="https://cdn.shopify.com/s/files/1/2283/2349/t/13/assets/bean--choose-bean-left.jpg?v=108049564517621660831649345669"
            alt=""/>
            {props.message}
            <div>
                <span>Like</span> {props.countLike}
            </div>
        </div>


    )
}

export default Post;