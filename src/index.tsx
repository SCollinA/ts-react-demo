import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello/>
  </Provider>,
  document.getElementById('root') as HTMLElement
  // the following would also be an acceptable cast
  // document.getElementById('root')!
);
registerServiceWorker();
