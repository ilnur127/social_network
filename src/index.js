import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/state.js'
import App from './App'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
