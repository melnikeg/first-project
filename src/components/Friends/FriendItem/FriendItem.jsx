import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Friends.module.css';

const FriendItem = (props) => {
    let path = '/friends/' + props.id;

    return (
        <div className={s.friends + ' ' + s.active}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSaNzYlhsLDFFJydScZsv2lcHW9na_VEItg&usqp=CAU' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default FriendItem;