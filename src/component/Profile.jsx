import React from 'react';
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg'
                    alt=''/>
            </div>
            <div>
                ava + description
                <img src='https://ps.w.org/shortpixel-image-optimiser/assets/icon-256x256.png?rev=1038819' alt=''/>
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;