import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsComponents = props.dialogPage.dialogs
        .map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)

    const messagesComponents = props.dialogPage.messages
        .map(message => <Message text={message.message}/>)

    const messageText = React.createRef()

    const updateMessage = () => {
        const text = messageText.current.value
        props.updateMessage(text)
    }
    const addMessage = () => {
        props.addMessage()
        props.updateMessage(" ")
    }

    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogs}>
                {dialogsComponents}
            </div>
            <div className={style.messages}>
                {messagesComponents}
                <div>
                    <textarea onChange={updateMessage} ref={messageText} value={props.dialogPage.newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs