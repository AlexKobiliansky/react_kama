import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo(){
    return (
        <div>
            <div>
                <img src="https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg" alt="alt" className={s.wrap__img}/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
        )

}

export default ProfileInfo;