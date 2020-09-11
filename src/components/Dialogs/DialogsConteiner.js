import React from 'react'
import Dialogs from './Dialogs'
import {
  addMessage,
  addMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/dialogPageReduser'
import { connect } from 'react-redux'
import { withLogin } from '../../hoc/withLogin'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage,
    isLogin: state.auth.isLogin,
  }
}

export default compose(connect(mapStateToProps, { addMessage }))(Dialogs)
