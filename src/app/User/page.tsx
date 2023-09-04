"use client"

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const user = () => {
  const {data:session } = useSession()

  const router = useRouter()
  console.log(session)

  useEffect(() => {
    if(!session) {
      router.push("/")
    }
  },[session])

  if(!session) {
    return (
      <div className='text-center'>
        Loading...
      </div>
    )
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <p className='mt-4'>
        You are welcome {' '}
        {session?.user?.name}
      </p>
      <p className='my-4'>
        Here is your email {" "}
      {session?.user?.email}
      </p>
      
        
      </div>
      <div className='flex justify-center'>
        <button onClick={() => signOut()} className='bg-red-500 rounded-md px-3 py-3'>
          Logout
        </button>
       </div>
    </>
    
  )
}

export default user