import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Link to={'/login'}>
        <Button colorScheme='blue'>Login</Button>
    </Link>
  )
}

export default Home