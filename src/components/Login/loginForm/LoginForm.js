import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../Common/FormComponents/FormControl'
import { maxLenght30, required } from '../../../helpers/validators'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'email'}
            name={'email'}
            component={Input}
            validate={[required, maxLenght30]}
            data-cy={'loginForm'}
          />
        </div>
        <div>
          <Field
            placeholder={'password'}
            name={'password'}
            type={'password'}
            component={Input}
            validate={[required]}
            data-cy={'passwordForm'}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={Input} />
          remember me
        </div>
        {props.error && <div data-cy={'error'}>{props.error}</div>}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
export const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
