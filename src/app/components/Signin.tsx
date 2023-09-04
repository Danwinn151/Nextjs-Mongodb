"use client"

import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Signin = () => {
  const {data: session} = useSession()
  const router = useRouter()
  if(session) {
   router.push("/User")
  }


        
  return (
    <div className='flex flex-col justify-center items-center gap-[12px]'>
      <p>
        Simplified GitHub Authentication
      </p>
      
      <div>
       <button className='bg-[#000] text-[#fff] px-3 py-3 rounded-md' onClick={() => signIn()}>
       Login 
       </button>  
      </div>
          
    </div>
  )
}

export default Signin