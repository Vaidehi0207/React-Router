import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
     <>
    {/* // we are giving an outlet so that whatever components we are calling is fixed
    // but iske andar automatically nesting ki ja skti h */}
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout