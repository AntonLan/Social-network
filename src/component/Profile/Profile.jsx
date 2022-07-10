import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={`${s.content} conteiner`}>
            <div className="row g-0">
                <img style={{width: '900px'}}
                     src='https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg'
                     alt=''/>
            </div>

            <div className={`${s.item} row g-0`}>
                ava + description
            </div>
            <MyPosts/>
        </div>
)
}

export default Profile;