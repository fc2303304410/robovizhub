import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router/router.tsx'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)