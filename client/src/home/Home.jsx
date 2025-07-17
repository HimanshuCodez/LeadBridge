import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Testimonials  from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { FeaturesGrid } from '../components/FeaturesGrid'
import TutorialVideo from '../components/TutorialVideo'
import TrustedBy from '../components/TrustedBy'
import Chart from '../components/Chart'
import Chart2 from '../components/Chart2'

import PricingComparison from '../components/Pricing'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <TrustedBy/>
        <FeaturesGrid/>
        <Chart/>
        <PricingComparison/>
        <TutorialVideo/>
        <Chart2/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home

// ├── components
// │   ├── Navbar.jsx
// │   ├── HeroSection.jsx
// │   ├── TrustedBy.jsx
// │   ├── FeaturesGrid.jsx
// │   ├── Chart.jsx
// │   ├── Chart2.jsx
// │   ├── PricingComparison.jsx
// │   ├── TutorialVideo.jsx
// │   ├── Testimonials.jsx
// │   ├── Footer.jsx
// │   └── CRM (Dashboard components will go here)
// │       ├── Sidebar.jsx
// │       ├── DashboardHome.jsx
// │       ├── LeadsTable.jsx
// │       ├── LeadDetailsModal.jsx
// │       ├── AddLeadForm.jsx
// │       ├── Tasks.jsx
// │       ├── Calendar.jsx
// │       └── Analytics.jsx
// ├── pages
// │   ├── Home.jsx
// │   ├── Signup.jsx
// │   ├── Login.jsx
// │   ├── Dashboard.jsx
// │   └── NotFound.jsx
// ├── context
// │   └── AuthContext.jsx
// ├── store
// │   └── useLeadsStore.js
// ├── App.jsx
// └── main.jsx


// ├── controllers
// │   ├── authController.js
// │   ├── userController.js
// │   ├── leadController.js
// │   ├── taskController.js
// │   └── analyticsController.js
// ├── models
// │   ├── User.js
// │   ├── Lead.js
// │   ├── Task.js
// │   └── Activity.js
// ├── routes
// │   ├── authRoutes.js
// │   ├── userRoutes.js
// │   ├── leadRoutes.js
// │   ├── taskRoutes.js
// │   └── analyticsRoutes.js
// ├── middleware
// │   ├── authMiddleware.js
// │   └── errorHandler.js
// ├── config
// │   └── db.js
// ├── server.js
// └── .env
