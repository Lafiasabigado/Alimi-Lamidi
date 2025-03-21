import React from 'react'
import Presentation from './components/Presentation'
import Contact from './components/Contact'

const Page = () => {
  return (
    <main className='max-w-5xl mx-auto'>
      <Presentation />
      <Contact />
    </main>  
  )
}

export default Page