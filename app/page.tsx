import React from 'react'
import Presentation from './components/Presentation'
import Contact from './components/Contact'
import About from './components/About'

const Page = () => {
  return (
    <main className='max-w-5xl mx-auto'>
      <Presentation />
      <About />
      <Contact />
    </main>  
  )
}

export default Page