import React from 'react'
import Presentation from './components/Presentation'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'
import { Projects } from './components/Projects'

const Page = () => {
  return (
    <main className='max-w-5xl mx-auto'>
      <Presentation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>  
  )
}

export default Page