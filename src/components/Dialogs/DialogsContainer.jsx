import React from 'react';
import { addMessageActionCreator, updateNewMessgeTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let onSendMessageClick = () => {
                store.dispatch(addMessageActionCreator());
            }

            let onNewMassegeChange = (body) => {
                store.dispatch(updateNewMessgeTextActionCreator(body));
            }

            return <Dialogs updateNewMessgeBody={onNewMassegeChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage} />
        }
        }
    </StoreContext.Consumer>    
}

export default DialogsContainer;