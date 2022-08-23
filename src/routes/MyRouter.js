import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register/Register'
import Auth from '../screens/Auth'
import Dashboard from '../screens/Dashboard'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  )
}

export default MyRouter