import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import LandingPage from './pages/LandingPage'
import './index.css'
import LeadCaptureForm from './pages/LeadCapture'
import Lead from './components/CRM/Lead'
import Onboarding from './components/CRM/Lead'
import DashboardLayout from './pages/Dashboard/Dashboard'
import Home from './pages/Dashboard/Home'
import Leads from './pages/Dashboard/Leads'
import Tasks from './pages/Dashboard/Tasks'
import Emails from './pages/Dashboard/Emails'
import Settings from './pages/Dashboard/Profile'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<App />} />
        <Route path="/LeadCapture" element={<LeadCaptureForm />} />
        <Route path="/onboarding" element={<Lead/>} />
<Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home/>} />
          <Route path="leads" element={<Leads />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="emails" element={<Emails />} />
          <Route path="settings" element={<Settings />} />
        </Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
