import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLenght30, required } from '../../../helpers/validators'
import { Textarea } from '../../Common/FormComponents/FormControl'

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newMessageBody'}
          placeholder={'Add Message'}
          validate={[required, maxLenght30]}
        />
      </div>
      <div>
        <button>send message</button>
      </div>
    </form>
  )
}
export const AddMessageFormRedux = reduxForm({ form: 'MessageForm' })(MessageForm)
