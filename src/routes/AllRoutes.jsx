import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from '../pages/Authentication'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Authentication />} />
        <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default AllRoutes