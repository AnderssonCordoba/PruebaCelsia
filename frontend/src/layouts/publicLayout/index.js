import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom' 
import Navbar from './components/Navbar '

const PublicLayout = () => { 

  return (
    <>
      <main>
        <div>
            <Navbar/>
        </div>
        <div> 
            <Outlet/>
        </div>
      </main>
    </>
    ) 
}

export default PublicLayout
