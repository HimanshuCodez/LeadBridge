import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import LandingPage from './pages/LandingPage'
import './index.css'
import LeadCaptureForm from './pages/LeadCapture'
import Lead from './components/CRM/Lead'
import Onboarding from './components/CRM/Lead'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<App />} />
        <Route path="/LeadCapture" element={<LeadCaptureForm />} />
        <Route path="/onboarding" element={<Lead/>} />
<Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="leads" element={<Leads />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="emails" element={<Emails />} />
          <Route path="settings" element={<Settings />} />
        </Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
