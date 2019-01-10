import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import * as serviceWorker from './service-worker';

ReactDOM.render(<App />, document.getElementById('root'));

// to use service worker, change to .register()
serviceWorker.unregister();
