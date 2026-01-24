import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './reset.css'
import './index.css'
import App from './app/App.tsx'

// Use import.meta.env.BASE_URL from the Vite config
const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter basename={basename}>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
