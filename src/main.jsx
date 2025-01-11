import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { Layout } from 'antd'
// import ShowScreenPage from './fontendPage/Layout/ShowScreenPage.jsx'

// Switch to MainLayout when user is logged in


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ShowScreenPage/> */}
    <App/>
  </StrictMode>,
)
