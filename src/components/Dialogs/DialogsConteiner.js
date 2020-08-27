import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogPageReduser'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateMessage: (text) => {
      dispatch(updateMessageActionCreator(text))
    },
  }
}
const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsConteiner
