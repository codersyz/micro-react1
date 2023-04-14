import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import './public-path.js';

function render(props) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// if (!window.__POWERED_BY_QIANKUN__) {
render({});
// }
console.log(123);

// 启动微应用
export async function bootstrap() {
  console.log('react app bootstraped');
}

// 挂载微应用
export async function mount(props) {
  render(props);
}

// 卸载微应用
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}
reportWebVitals();

