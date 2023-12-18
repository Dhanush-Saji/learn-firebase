import { Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Authentication = () => {
  return (
    <Flex w={'100vw'} h={'100vh'} color={'white'} pos={'relative'}>
        <Flex gap={'1rem'} flexDir={'column'} pos={'absolute'} left={'50%'} top={'50%'} transform="translate(-50%, -50%)" bg={'rgba(255, 255, 255, 0.15)'} p={'1.5rem'} borderRadius={'0.7rem'}>
        <Flex flexDir={'column'}>
            <label htmlFor="">Email</label>
            <Input type='text' />
        </Flex>
        <Flex flexDir={'column'}>
            <label htmlFor="">Password</label>
            <Input type='password' />
        </Flex>
        </Flex>
    </Flex>
  )
}

export default Authentication