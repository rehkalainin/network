import * as serviceWorker from './serviceWorker'
import React from 'react'
import './index.css'
import store from './redux/reduxStore'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  )
}
rerender()

store.subscribe(() => {
  rerender()
})

serviceWorker.unregister()
