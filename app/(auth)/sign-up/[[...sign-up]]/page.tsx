import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex-center h-screen w-full'>
        <SignUp />
    </main>
  )
}

export default SignUpPage

// // Function to generate static params for dynamic routes
// export async function generateStaticParams() {
//   // Return an empty array if you don't have specific dynamic paths to pre-render
//   return []
// }