import React, { useEffect, useState } from 'react'
import {getDocs,collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import { auth, db, storage } from '../firebase/config'
import { Button, Checkbox, Flex, Input, Text, useStatStyles } from '@chakra-ui/react'
import { ref, uploadBytes } from 'firebase/storage'

const Movies = () => {
    const [form, setform] = useState({title:'',date:'',oscar:false})
    const [movieList, setmovieList] = useState([])
    const [files, setfiles] = useState(null)
    const [title, settitle] = useState('')
    const getMovieList = async() =>{
        try {
            const data = await getDocs(collection(db,"movies"))
            const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setmovieList(filteredData)
        } catch (error) {
            console.log(error)
        }
    }
    const addMovieList = async() =>{
        if(form.title == '' || form.title == ''){
            alert('Enter data')
            return
        }
        try {
            await addDoc(collection(db,'movies'),{
                title:form.title,
                date:form.date,
                oscar:form.oscar,
                userId:auth?.currentUser?.uid
            })
            getMovieList()
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async(id) =>{
        try {
            await deleteDoc(doc(db,"movies",id))
            getMovieList()
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdate = async(id) =>{
        if(title == ''){
            alert('Enter data')
            return
        }
        try {
            await updateDoc(doc(db,"movies",id),{title})
            getMovieList()
        } catch (error) {
            console.log(error);
        }
    }
    const uploadFileFn = async() =>{
        if(!files) return
        try {
            await uploadBytes(ref(storage,`project/${files.name}`))
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getMovieList()
    },[])
  return (
    <>
    <Flex gap={'1rem'} p={'1rem'} alignItems={'center'}>
        <Flex flexDir={'column'} gap={'0.5rem'}>
            <label htmlFor="">Title</label>
            <Input type='text' value={form.title} onChange={(e)=>setform({...form,title:e.target.value})} />
        </Flex>
        <Flex flexDir={'column'} gap={'0.5rem'}>
            <label htmlFor="">date</label>
            <Input type='number' value={form.date} onChange={(e)=>setform({...form,date:e.target.value})} />
        </Flex>
        <Flex flexDir={'column'} gap={'0.5rem'}>
            <label style={{visibility:'hidden'}}>date</label>
            <Checkbox onChange={(e)=>setform({...form,oscar:e.target.checked})}>Oscar?</Checkbox>
        </Flex>
        <Flex flexDir={'column'} gap={'0.5rem'}>
            <label style={{visibility:'hidden'}}>date</label>
            <Button onClick={addMovieList}>Add</Button>
        </Flex>
    </Flex>
    <Flex flexDir={'column'} gap={'1rem'} w={'full'} p={'1rem'}>
        {
            movieList.length >0 && movieList.map((movie,index)=>(
                <Flex width={'fit-content'} key={index} gap={'1rem'} alignItems={'center'} bg={movie.oscar?'rgb(75, 206, 114,0.4)':'rgb(223, 82, 100,0.4)'} borderRadius={'8px'} p={'0 1rem'}>
                    <Text as={'b'} fontSize={'2rem'}>{movie.title}</Text>
                    <Text mb={'5px'}>{movie.date}</Text>
                    <Button colorScheme='red' onClick={()=>handleDelete(movie.id)}>Delete</Button>
                    <Flex gap={'1rem'} border={'1px solid rgba(255,255,255,0.5)'} p={'1rem'}>
                        <Input value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Update title' />
                        <Button onClick={()=>handleUpdate(movie.id)}>Update</Button>
                    </Flex>
                </Flex>
            ))
        }
    </Flex>
    <Flex>
        <input type="file" onChange={(e)=>setfiles(e.target.files[0])} />
        <Button onClick={uploadFileFn}>Upload</Button>
    </Flex>
    </>
  )
}

export default Movies