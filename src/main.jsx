import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Hide loading screen when app loads
const loadingElement = document.getElementById('loading');
if (loadingElement) {
  setTimeout(() => {
    loadingElement.style.display = 'none';
  }, 1000);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Update the main App export at the bottom of app.jsx
function AppWrapper() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default AppWrapper;