import React from 'react';
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={`${s.content} conteiner`}>
            <div className="row g-0">
                <img style={{width: '900px'}} src='https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg'
                    alt=''/>
            </div>

            <div className={`${s.item} row g-0`}>
                <img style={{width: '50px'}} src='https://ps.w.org/shortpixel-image-optimiser/assets/icon-256x256.png?rev=1038819' alt=''/>
                ava + description
            </div>

            <div className={`${s.item} row g-0`}>
                my posts
                <div className={`${s.item} row g-0`}>
                    New post
                </div>
                <div className={`${s.posts} row g-0`}>
                    <div className={`${s.item} row`}>
                        post 1
                    </div>
                    <div className={`${s.item} row`}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;