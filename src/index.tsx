import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './components/store/sliderSlice';


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
  }
`




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <Global />
        <App />
      </>
    </Provider>
  </React.StrictMode>
);


