import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';
import StoreContext from '../../StoreContext';

const Friends = (props) => {

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().sidebar;
            let friendsElements = state.friends.map(d => <FriendItem name={d.name} id={d.id} />);
            return (            
                <div className={s.friends}>
                    <div className={s.friendsItems}>
                        {friendsElements}
                    </div>
                </div>
            )
        }
        }
    </StoreContext.Consumer>
}

export default Friends;