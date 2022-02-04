import { React } from "react";
import ReactDOM from "react-dom";
import { Provider, } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { appReducer } from "./applicationReducer";
import App from "./App";

export const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById("root")
);