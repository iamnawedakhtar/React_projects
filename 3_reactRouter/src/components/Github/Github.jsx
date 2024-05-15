import React, { useEffect, useState } from 'react'
import { useLoaderData,  } from 'react-router-dom'

function Github() {

    const data=useLoaderData()
    // const [data,setdata]= useState([]);
    // useEffect(() => {           //atomatically call when a componenet is renderd
    //       fetch('https://api.github.com/users/iamnawedakhtar')
    //       .then(Response=>Response.json())
    //       .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //       })
    // },[])
    
  return (
    <div className=' bg-gray-600 m-4 p-4 text-3xl text-white text-center'>
          Github Followers: {data.followers}
          <img  className="m-auto rounded-3xl "src={data.avatar_url} alt="profile photo " width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const response= await fetch('https://api.github.com/users/iamnawedakhtar')
    return (response.json());
}
