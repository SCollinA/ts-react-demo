import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name='Collin' enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
  // the following would also be an acceptable cast
  // document.getElementById('root')!
);
registerServiceWorker();
