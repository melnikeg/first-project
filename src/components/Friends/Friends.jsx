import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {
          
            /* let state = store.getState().sidebar;
            let friendsElements = state.friends.map(d => <FriendItem name={d.name} id={d.id} />);
            return (            
                <div className={s.friends}>
                    <div className={s.friendsItems}>
                        {friendsElements}
                    </div>
                </div>
            ) */
        return (
            <div className={s.friendsItems}>
                Here my friends
            </div>
        )            
}

export default Friends;