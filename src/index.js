import * as serviceWorker from "./serviceWorker"
import React from 'react';
import './index.css';
import state, {addMessage, addPost, subscribe, updateMessage, updateText} from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateText={updateText}
                 updateMessage={updateMessage} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerender(state)

subscribe(rerender)


serviceWorker.unregister()

