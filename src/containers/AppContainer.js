import {Provider} from 'react-redux'
import React from "react";
import App from "../components/App";
import store from '../store/store';

const AppContainer = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default AppContainer;