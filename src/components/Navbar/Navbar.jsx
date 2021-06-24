import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {

  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
    </div>
   {/*  <div className={s.friends}>
      <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
      <div className={s.friendsItem}>
        <div className={s.circleBase}></div>
        <div className={s.circleBase}></div>
        <div className={s.circleBase}></div>
        <div className={s.friendsName}>{props.state.friends[0].name}</div>
        <div className={s.friendsName}>{props.state.friends[1].name}</div>
        <div className={s.friendsName}>{props.state.friends[2].name}</div>
      </div>
    </div> */}
  </nav>
}

export default Navbar;