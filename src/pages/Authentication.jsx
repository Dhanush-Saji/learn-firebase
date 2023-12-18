import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, googleProvider } from '../firebase/config'

const Authentication = () => {
  const [form, setform] = useState({email:'',password:''})
  const signIn = async() =>{
    try {
      await createUserWithEmailAndPassword(auth,form.email,form.password)
    } catch (error) {
      console.log(error)
    }
  }
  const signInWithG = async() =>{
    try {
      await signInWithPopup(auth,googleProvider)
    } catch (error) {
      console.log(error)
    }
  }
  const signOutFn = async() =>{
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }
  const showCurrentUser = () =>{
    console.log(auth?.currentUser)
  }
  return (
    <Flex w={'100vw'} h={'100vh'} color={'white'} pos={'relative'}>
        <Flex gap={'1rem'} flexDir={'column'} pos={'absolute'} left={'50%'} top={'50%'} transform="translate(-50%, -50%)" bg={'rgba(255, 255, 255, 0.15)'} p={'1.5rem'} borderRadius={'0.7rem'}>
        <Flex flexDir={'column'}>
            <label htmlFor="">Email</label>
            <Input value={form.email} type='text' onChange={(e)=>setform({...form,email:e.target.value})} />
        </Flex>
        <Flex flexDir={'column'}>
            <label htmlFor="">Password</label>
            <Input value={form.password} type='password' onChange={(e)=>setform({...form,password:e.target.value})} />
        </Flex>
        <Flex flexDir={'column'}>
            <label htmlFor="" style={{visibility:'hidden'}}>Password</label>
            <Button onClick={signIn} colorScheme='blue'>Login</Button>
        </Flex>
        </Flex>
        <Button onClick={showCurrentUser}>Check current user</Button>
        <Button onClick={signInWithG}>Sign in with Google</Button>
        <Button onClick={signOutFn}>Sign out</Button>
    </Flex>
  )
}

export default Authentication