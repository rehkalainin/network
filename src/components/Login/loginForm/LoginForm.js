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
          />
        </div>
        <div>
          <Field
            placeholder={'password'}
            name={'password'}
            type={'password'}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={Input} />
          remember me
        </div>
        {props.error && <div>{props.error}</div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}
export const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
