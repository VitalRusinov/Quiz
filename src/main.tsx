import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app';
import './shared/i18n/i18n';

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
