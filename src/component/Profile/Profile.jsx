import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className='conteiner'>
            <div className="row g-0">
                <img fullwidth
                     src='https://www.oceandecade.org/wp-content/themes/unesco-ocean-decade/assets/images/thumbnail/default-listing.jpg'
                     alt=''/>
            </div>

            <div className={`${s.content} row g-0`}>
                ava + description
            </div>
            <MyPosts/>
        </div>
)
}

export default Profile;