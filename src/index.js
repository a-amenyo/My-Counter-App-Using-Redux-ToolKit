import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from 'react-redux';

let root = document.getElementById("root"); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    root);
