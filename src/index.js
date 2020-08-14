import * as serviceWorker from "./serviceWorker"
import React from 'react';
import './index.css';
import store from "./redux/store"
import ReactDOM from "react-dom";
import App from "./App";

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateText={store.updateText.bind(store)}
                 updateMessage={store.updateMessage.bind(store)}
                 addMessage={store.addMessage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerender(store.getState())

store.subscribe(rerender)


serviceWorker.unregister()

