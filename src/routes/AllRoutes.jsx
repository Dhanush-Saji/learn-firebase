import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from '../pages/Authentication'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Authentication />} />
    </Routes>
    </>
  )
}

export default AllRoutes