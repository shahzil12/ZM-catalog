import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

window.addEventListener('error', (event) => {
  console.error('Captured Error:', event.error);
  const errDiv = document.getElementById('error-display');
  if (errDiv) {
    errDiv.style.display = 'block';
    errDiv.innerHTML += `<div style="color: red; background: #fff; padding: 10px; margin: 10px; border: 2px solid red; font-family: monospace;">
      <strong>JS Error:</strong> ${event.message}<br/><pre>${event.error?.stack || ''}</pre>
    </div>`;
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Rejection:', event.reason);
  const errDiv = document.getElementById('error-display');
  if (errDiv) {
    errDiv.style.display = 'block';
    errDiv.innerHTML += `<div style="color: red; background: #fff; padding: 10px; margin: 10px; border: 2px solid red; font-family: monospace;">
      <strong>Unhandled Rejection:</strong> ${event.reason?.message || event.reason}<br/><pre>${event.reason?.stack || ''}</pre>
    </div>`;
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="error-display" style={{ display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999999 }}></div>
    <App />
  </React.StrictMode>
);

