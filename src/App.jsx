import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import { Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <Flex gap={'1rem'}>
    <Link to={'/login'}>
        <Button colorScheme='blue'>Login</Button>
    </Link>
    <Link to={'/movies'}>
        <Button colorScheme='blue'>Movies</Button>
    </Link>
    </Flex>
    <AllRoutes />
    </>
  )
}

export default App
