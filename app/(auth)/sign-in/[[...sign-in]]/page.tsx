import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex-center h-screen w-full'>
        <SignIn />
    </main>
  )
}

export default SignInPage;

// // Function to generate static params for dynamic routes
// export async function generateStaticParams() {
//   // Return an empty array if you don't have specific dynamic paths to pre-render
//   return []
// }