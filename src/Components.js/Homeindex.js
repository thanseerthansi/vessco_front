import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Scripts from './Scripts'

export default function Homeindex() {
  useEffect(() => {
    Scripts()
  }, [])
  
  return (
    <div>
        <Header/>
        <div className='main-wrapper'>
        <Outlet />
        </div>
    </div>
  )
}
