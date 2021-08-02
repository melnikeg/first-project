import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageText;

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
                    <div><textarea placeholder='Enter your message'
                        onChange={onMassegeChange}
                        value={newMessageBody}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;