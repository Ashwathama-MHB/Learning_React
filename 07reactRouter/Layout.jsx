import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './src/Components/Header/Header.jsx'
import Footer from './src/Components/Footer/Footer.jsx'
// Layout component that wraps around the main content of the application
// It includes the Header and Footer components, and uses Outlet to render child routes
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
