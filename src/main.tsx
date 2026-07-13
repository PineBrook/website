import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Disable developer tools access (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Right-Click)
if (typeof window !== "undefined") {
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("keydown", (e) => {
    // Block F12
    if (e.key === "F12") {
      e.preventDefault();
    }
    // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
      e.preventDefault();
    }
    // Block Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
      e.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
