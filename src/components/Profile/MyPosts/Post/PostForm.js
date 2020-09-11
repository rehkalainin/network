import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLenght10, required } from '../../../../helpers/validators'
import FormControl, { Textarea } from '../../../Common/FormComponents/FormControl'

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newPostText'}
          placeholder={'Add new post'}
          validate={[required, maxLenght10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
export const PostFormRedux = reduxForm({ form: 'PostForm' })(PostForm)
