import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'

import './index.css'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
