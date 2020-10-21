import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

import { AddMessageFormRedux } from './Message/MessageForm'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../redux/dialogPageReduser'

const Dialogs = () => {
  const dialogs = useSelector((state) => state.dialogPage.dialogs)
  const messages = useSelector((state) => state.dialogPage.messages)
  const isLogin = useSelector((state) => state.auth.isLogin)

  const dispatch = useDispatch()

  const dialogsComponents = dialogs.map((dialog) => <Dialog id={dialog.id} name={dialog.name} />)

  const messagesComponents = messages.map((message) => <Message text={message.message} />)

  const addNewMessage = (values) => {
    dispatch(addMessage(values.newMessageBody))
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
