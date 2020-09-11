import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import Redirect from 'react-router-dom/es/Redirect'
import { AddMessageFormRedux } from './Message/MessageForm'

const Dialogs = (props) => {
  const dialogsComponents = props.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ))

  const messagesComponents = props.messages.map((message) => <Message text={message.message} />)

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  return (
    <div className={style.dialogsWrapper}>
      <div className={style.dialogs}>{dialogsComponents}</div>
      <div className={style.messages}>
        {messagesComponents}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}
export default Dialogs
