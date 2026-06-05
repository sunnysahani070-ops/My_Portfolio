import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import './index.css'
import App from './App.jsx'

function fallbackRender({ error }) {
  return (
    <div role="alert" style={{ color: 'red', padding: '20px' }}>
      <h1>App crashed:</h1>
      <pre style={{ color: 'white' }}>{error.message}</pre>
      <pre style={{ color: 'gray' }}>{error.stack}</pre>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
