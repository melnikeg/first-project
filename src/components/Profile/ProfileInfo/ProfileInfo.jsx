import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.imgBlock}>
        <img src='https://traveltu.ru/wp-content/uploads/2016/12/Zamok-Elts-mini.jpg' className={s.imgBlock}></img>
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>
    </div>
  )
}

export default ProfileInfo;