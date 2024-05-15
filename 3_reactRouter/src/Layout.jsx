import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
// this way we can add anything between header and footer no need to apply heder and footer at every home ,about page

function Layout() {
  return (
    <>
        <Header/>
        <Outlet />       
        <Footer />
    </>
  )
}
export default Layout
