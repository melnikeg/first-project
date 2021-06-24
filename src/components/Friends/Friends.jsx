import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';
import StoreContext from '../../StoreContext';

const Friends = () => {

    return (<StoreContext.Consumer>
        {(store) => {
            let friendsElements = store.getState().sidebar.friends.map(d => <FriendItem name={d.name} id={d.id} />);
            <div className={s.friends}>
                <div className={s.friendsItems}>
                    {friendsElements}
                </div>
            </div>
        }
        }
    </StoreContext.Consumer>
    )
}

export default Friends;