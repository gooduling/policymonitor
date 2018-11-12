import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {App} from "./components/App"

render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
registerServiceWorker();