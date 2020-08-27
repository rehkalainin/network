import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  const dialogsComponents = props.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ))

  const messagesComponents = props.messages.map((message) => <Message text={message.message} />)

  const messageText = React.createRef()

  const onAddMessage = () => {
    props.addMessage()
    props.updateMessage(' ')
  }
  const onUpdateMessage = () => {
    const text = messageText.current.value
    props.updateMessage(text)
  }

  return (
    <div className={style.dialogsWrapper}>
      <div className={style.dialogs}>{dialogsComponents}</div>
      <div className={style.messages}>
        {messagesComponents}
        <div>
          <textarea onChange={onUpdateMessage} ref={messageText} value={props.newMessage} />
        </div>
        <div>
          <button onClick={onAddMessage}>send message</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
