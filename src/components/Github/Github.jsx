import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sa1man9')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-500 text-white texxt-3xl'>
    Github Followers:{data?.followers}
    </div>
  )
}

export default Github

export const githubUser=async()=>{
    const res=await fetch('https://api.github.com/users/Sa1man9');
    return res.json()
}