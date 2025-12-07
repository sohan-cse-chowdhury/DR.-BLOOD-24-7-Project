import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { LanguageProvider } from './App.jsx'
// import './login.jsx'


import './index.css'

// Hide loading screen when app loads
const loadingElement = document.getElementById('loading');
if (loadingElement) {
  setTimeout(() => {
    loadingElement.style.display = 'none';
  }, 1000);
}



class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null, info: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error('ErrorBoundary caught:', error, info); this.setState({ info }); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: '#fff', background: '#2b0b0b', minHeight: '100vh' }}>
          <h2>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#ffdede' }}>{this.state.error && this.state.error.toString()}</pre>
          <details style={{ whiteSpace: 'pre-wrap', color: '#ffdede' }}>{this.state.info && this.state.info.componentStack}</details>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </React.StrictMode>
)

