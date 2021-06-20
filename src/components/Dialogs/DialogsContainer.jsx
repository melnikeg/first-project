import React from 'react';
import { addMessageActionCreator, updateNewMessgeTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
   
    let onSendMessageClick = () => {
        props.store.dispatch( addMessageActionCreator() );         
    }
    
    let onNewMassegeChange = (body) => {                
        props.store.dispatch(updateNewMessgeTextActionCreator(body));
    }

    return <Dialogs updateNewMessgeBody={onNewMassegeChange} sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

export default DialogsContainer;