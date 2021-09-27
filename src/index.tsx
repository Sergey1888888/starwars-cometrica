import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Audiowide', cursive;
  }
  body {
    background: #1B1B1B;
  }
  
  @media screen and (max-width: 435px) {
    html {
      font-size: 12px;
    }
  }
  
    
  @media screen and (max-width: 350px) {
    html {
      font-size: 10px;
    }
  }
`

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);