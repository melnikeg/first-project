import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, updateNewMessgeTextActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements = state.messages.map(m => <Message message={m.message} />)

    let newMessageBody = state.newMessgeBody;
   
    let onSendMessageClick = () => {
        props.sendMessage();         
    }
    
    let onMassegeChange = (e) => {        
        let body = e.target.value;
        props.updateNewMessgeBody(body);       
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messageArea}>                    
                        <div>
                            <span className={s.circleBase}></span>
                        </div>
                        <div>
                            {messageElements}
                        </div>                   
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>                        
                        <div >
                            <span className={s.circleBase}></span>
                        </div>
                        <div>
                            {messageElements}
                        </div>                    
                </div>
                <div>
                    <textarea placeholder='Enter your message' onChange={ onMassegeChange } value={newMessageBody}/>
                    <div>
                        <button onClick={ onSendMessageClick }>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;