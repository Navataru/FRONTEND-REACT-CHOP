import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import UserdataStore from "./store/UserdataStore"

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        userdata: new UserdataStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

