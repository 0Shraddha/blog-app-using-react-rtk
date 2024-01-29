import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <main className='App'>
        <Outlet/> 
        {/* we can represent all the children using Outlet */}
    </main>
    </>
  )
}

export default Layout